qx.Class.define("tree.ui.tree.Tree", {
	extend : qx.ui.tree.VirtualTree,

	events : {
		dropend : 'qx.event.type.Data'
	},

	construct : function(path) {

		var root = {
			label : "Root",
			children : [],
			icon : "default",
			loaded : true,
			pk : null
		};

		root = qx.data.marshal.Json.createModel(root, true);

		this.__rootNode = root
		this.__nodes = {};

		
		if (path === null) {
			this.__loadChildren(root, true);
		} else {
			this.__firstLoad = false;
			this.__loadPath(root, path);
		}

		this.base(arguments, root, "name", "children");

		this.setWidth(400);
		this.setHideRoot(true);
		this.setShowTopLevelOpenCloseIcons(true);
		var delegate = {

			configureItem : qx.lang.Function.bind(function(item) {

				item.setDraggable(true);
				item.setDroppable(true);

				item.addListener("dragstart", function(e) {
							e.addAction("move");
							e.addType("qx/tree-nodes");
							qx.bom.Collection.query('body')
									.addClass('unselectable');
						});

				item.addListener("dragend", function(e) {
					qx.bom.Collection.query('body').removeClass('unselectable');
				});

				item.addListener('dragover', function(event) {

					var relatedTarget = event.getRelatedTarget();

					if (relatedTarget === null) {
						event.preventDefault();
						return;
					}

					var dest = event.getTarget().getModel();

					if (event.supportsType("html/cells")) {
						if (dest == this.getSelection().getItem(0)) {
							event.preventDefault();
						}
					} else {

						var src = relatedTarget.getModel();

						if (dest.getPk() === src.getPk()
								|| this.getAncestors(dest).indexOf(src) !== -1) {
							event.preventDefault();
						}
					}

					if (this.isNodeOpen(dest) === false) {
						this.openNode(dest)
					}

				}, this);

				item.addListener("drop", function(e) {

					var suportedTypes = ["html/cells", "qx/tree-nodes"]

					for (var i = 0, l = suportedTypes.length; i < l; i++) {

						if (e.supportsType(suportedTypes[i])) {

							var node = e.getTarget().getModel();

							switch (suportedTypes[i]) {

								case "html/cells" :

									var datas = e.getData(suportedTypes[i]);

									var post = {
										node : node.getPk(),
										items : []
									};

									for (var i = 0, l = datas.length; i < l; i++) {
										post.items.push(datas[i].itemPk)
									}

									var popupWaiting = new tree.ui.popup.Waiting();

									var resource = new tree.io.rest.Item();
									resource.addListener('success', function() {
												popupWaiting.close()
												this.fireDataEvent('dropend',
														node);
											}, this);

									resource.addListener('error', function() {
												popupWaiting.close()
												new tree.ui.popup.Error(this
														.tr('something went wrong'));
											}, this);

									resource.moveToNode(post);
									break;

								case "qx/tree-nodes" :

									var movedNode = e.getRelatedTarget()
											.getModel();

									var post = {
										node : movedNode.getPk(),
										target : node.getPk()
									}
									var popupWaiting = new tree.ui.popup.Waiting();

									var resource = new tree.io.rest.Node();
									resource.addListener('success', function(
											event) {

										var position = event.getData().position;

										movedNode.setName(event.getData().name)

										popupWaiting.close()

										this.getParent(movedNode).getChildren()
												.remove(movedNode);
										movedNode.setParent(node.getPk())

										node.getChildren().insertAt(position,
												movedNode);
										this.refresh();

										this.openNodeAndParents(movedNode);
										this
												.setSelection(new qx.data.Array([movedNode]));

									}, this);

									resource.addListener('error', function() {
												popupWaiting.close()
												new tree.ui.popup.Error(this
														.tr('something went wrong'));
											}, this);

									resource.moveToNode(post);

									break;

							}

						}

					}

				}, this);

			}, this),

			bindItem : qx.lang.Function.bind(function(controller, item, index) {
						controller.bindDefaultProperties(item, index);

						controller.bindProperty("", "open", {
									converter : qx.lang.Function.bind(function(
													parent, model, source,
													target) {
												var isOpen = target.isOpen();
												if (isOpen
														&& !parent.getLoaded()) {

													this.__loadChildren(parent);
												}

												return isOpen;
											}, this)
								}, item, index);
					}, this)
		};
		this.setDelegate(delegate);

		this.__createContextMenu();

	},

	members : {
		__nodes : null,
		__rootNode : null,
		__menuBtnDeleteFolder : null,
    
		__firstLoad : true,
		
		__createContextMenu : function() {
			var contextMenu = new qx.ui.menu.Menu();

			// #### add a folder
			var btnAdd = new qx.ui.menu.Button(this.tr('Add'),
					'custom/8/add.png');
			contextMenu.add(btnAdd);
			btnAdd.addListener('execute', this.__addFolder, this);

			// #### add a folder
			var btnRename = new qx.ui.menu.Button(this.tr('Rename'),
					'custom/8/rename.png');
			contextMenu.add(btnRename);
			btnRename.addListener('execute', this.__editFolder, this);

			// #### add a folder
			var btnDelete = new qx.ui.menu.Button(this.tr('Delete'),
					'custom/8/delete.png');
			this.__menuBtnDeleteFolder = btnDelete
			contextMenu.add(btnDelete);
			btnDelete.addListener('execute', this.__deleteFolder, this);

			this.addListener('beforeContextmenuOpen', function() {

				if (this.getSelection().getItem(0).getChildren().getLength() > 0) {
					this.__menuBtnDeleteFolder.setEnabled(false);
				} else {
					this.__menuBtnDeleteFolder.setEnabled(true);
				}

			}, this);

			this.setContextMenu(contextMenu);
		},

		__deleteFolder : function() {
			var node = this.getSelection().getItem(0);

			var popup = new tree.ui.popup.Confirm();
			popup
					.setText(this.tr('Delete the node named "%1"', node
									.getName()))

			popup.addListener('continue', function() {
						var resource = new tree.io.rest.Node();
						var popupWaiting = new tree.ui.popup.Waiting();

						resource.addListener('error', function(event) {
									popupWaiting.close();
									new tree.ui.popup.Error(event.getRequest()
											.getResponseText());

								}, this);

						resource.addListener('success',
								function(parent, event) {
									popupWaiting.close();
									var parent = this.getParent(node);
									var pchildren = parent.getChildren();
									pchildren.remove(node);

									delete this.__nodes[node.getPk()]

									this.openNode(parent);
									this
											.setSelection(new qx.data.Array([parent]));

								}, this);

						resource.del({
									id : node.getPk()
								});
					}, this);

		},

		__editFolder : function() {

			var node = this.getSelection().getItem(0);

			// open popup
			var popup = new tree.ui.popup.EditCreate();
			popup.setCaption(this.tr('Rename'));
			popup.setText(this.tr('Give a name to the folder'));
			popup.setFieldNameValue(node.getName());

			popup.addListener('continue', function(event) {

						var nodeName = event.getData();

						var resource = new tree.io.rest.Node();
						var popupWaiting = new tree.ui.popup.Waiting();

						resource.addListener('error', function(event) {
									popupWaiting.close();
									new tree.ui.popup.Error(event.getRequest()
											.getResponseText());

								}, this);

						resource.addListener('success',
								function(parent, event) {
									popupWaiting.close();
									node.setName(nodeName);

								}, this);

						resource.update({
									id : node.getPk(),
									name : nodeName
								});

					});
		},

		__addFolder : function() {

			// open popup
			var popup = new tree.ui.popup.EditCreate();
			popup.setCaption(this.tr('Add a folder'));
			popup.setText(this.tr('Give a name to the new folder'));

			popup.addListener('continue', function(event) {

				var nodeName = event.getData();

				var parent = this.getSelection().getItem(0);
				var resource = new tree.io.rest.Node();

				var popupWaiting = new tree.ui.popup.Waiting();

				resource.addListener('error', function(event) {
							popupWaiting.close();
							new tree.ui.popup.Error(event.getRequest()
									.getResponseText());

						}, this);

				resource.addListener('success', qx.lang.Function.bind(function(
										parent, event) {

									popupWaiting.close();

									var newNode = qx.data.marshal.Json
											.createModel(event.getData(), true);

									if (this.isNodeOpen(parent) === true) {

										this.__nodes[newNode.getPk()] = newNode;

										parent.getChildren().insertAt(
												newNode.getPosition(), newNode);

									} else {
										this.openNode(parent);

										if (parent.getChildren().getLength() == 0) {
											parent.setLoaded(true);
											this.__loadChildren(parent);
										}

									}

								}, this, parent));

				resource.create({
							parent : parent.getPk(),
							name : nodeName
						});

			}, this);

		},

		__registerNodes : function(nodes) {

			for (var i = 0, l = nodes.getLength(); i < l; i++) {
				var n = nodes.getItem(i);
				this.__nodes[n.getPk()] = n;
				if (n.getChildren().getLength()>0 && n.getLoaded() === true) {
					this.__registerNodes(n.getChildren());
				}
				
			}

		},

		__loadPath : function(parent, path) {

			var resource = new tree.io.rest.Node();
			resource.addListener('success', qx.lang.Function.bind(function(
									parent, event) {

								var children = qx.data.marshal.Json
										.createModel([event.getData()], true);

								this.__registerNodes(children);

								parent.setChildren(children);
								parent.setLoaded(true);
                
								var nodes = path.split('/'), last = nodes[nodes.length-1], node=this.__nodes[parseInt(last)];
								
								
								this.openNodeAndParents(node);
								this.setSelection(new qx.data.Array([node]));
							}, this, parent));

			resource.loadPath({
						path : path
					});

		},

		__loadChildren : function(parent, selectFirst) {

			selectFirst = typeof(selectFirst) !== 'undefined'
					? selectFirst
					: false;

			var resource = new tree.io.rest.Node();

			resource.addListener('success', qx.lang.Function.bind(function(
					parent, event) {

				var children = qx.data.marshal.Json.createModel(
						event.getData(), true);

				for (var i = 0, l = children.getLength(); i < l; i++) {
					var n = children.getItem(i);
					this.__nodes[n.getPk()] = n;
				}

				parent.setChildren(children);

				if (this.isNodeOpen(parent) === false) {
					this.openNode(parent);
				}
				

				if (selectFirst === true && children.getLength() > 0) {
					this.setSelection(new qx.data.Array([children.getItem(0)]));
				}

				parent.setLoaded(true);
        
				if (this.__firstLoad) {
				  this.__firstLoad = false;
				  
				  if (children.getLength() > 0) {
				    this.__loadChildren(children.getItem(0), false);
				  }
				  
				}
				
			}, this, parent));

			if (parent.getPk() === null) {
				resource.getRoot();
			} else {
				resource.getChildren({
							id : parent.getPk()
						});
			}

		},

		
    
		getCurrentPath : function () {
			
			var path = [this.getSelection().getItem(0).getPk()];
			
			this.getAncestors(this.getSelection().getItem(0)).forEach(function (node) {
			 if (node.getPk() !== null) {
			   path.push(node.getPk());
			 }
			 
			});
			path.reverse();
			return path.join('/')
			
		},
		
		getAncestors : function(node) {

			var ancestors = [];

			var n = node;
			while ((n = this.getParent(n)) !== null) {
				ancestors.push(n);
			}

			return ancestors;

		},

		getParent : function(node) {

			if (this.__rootNode == node) {
				return null;
			} else if (node.getParent() !== null) {
				return this.__nodes[node.getParent()];
			} else {
				return this.__rootNode;
			}

		}
	}

});