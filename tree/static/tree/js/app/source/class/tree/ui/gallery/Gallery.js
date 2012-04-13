/*
 * #ignore(on_item_click) #ignore(FileReader)
 */

qx.Class.define("tree.ui.gallery.Gallery", {
	extend : qx.ui.container.Composite,

	properties : {
		items : {
			init : null,
			apply : '_applyItems'
		},
		node : {
			init : null,
			nullable : true,
			apply : '_applyNode',
			event : 'changeNode'
		}
	},
	construct : function(title) {
		this.base(arguments, title);

		this.__uploaders = {};

		this.addListener('mouseup', this._onMouseUp, this);

		this.addListenerOnce('appear', function() {
					var dom = this.getContainerElement().getDomElement();
					dom.addEventListener("drop", qx.lang.Function.bind(
									this._onDrop, this));

					dom.addEventListener("dragenter", this._noopHandler, false);
					dom.addEventListener("dragexit", this._noopHandler, false);
					dom.addEventListener("dragover", this._noopHandler, false);

				}, this);

		this.setLayout(new qx.ui.layout.Grow());
		this.setAppearance('gallery');
		this.itemHeight = 130;
		this.itemWidth = 110;
		this.itemCount = 0;
		// this.itemPerLine = 1;

		var scroller = this._createScroller();
		this.__scroller = scroller;
		scroller.set({
					scrollbarX : "off",
					scrollbarY : "auto"
				});

		this.add(scroller);
		scroller.getPane().addListener("resize", this._onPaneResize, this);

		this.manager = new qx.ui.virtual.selection.CellRectangle(scroller
						.getPane(), this).set({
					mode : "multi",
					drag : false
				});
		this.manager.attachMouseEvents();
		this.manager.attachKeyEvents(scroller);

		var fontStyles = qx.theme.manager.Font.getInstance().resolve("default")
				.getStyles();
		this._fontCss = qx.bom.element.Style.compile(fontStyles);

		this.initItems();

		this.setDraggable(true);
		this.addListener("dragstart", function(e) {

			var items = this.manager.getSelection();
			for (var i = 0, l = items.length; i < l; i++) {
				if (typeof(this.getItemData(items[i].row, items[i].column).uploadId) !== 'undefined') {
					e.preventDefault();
					return;
				}
			}
			e.addAction("move");
			e.addType("html/cells");
			qx.bom.Collection.query('body').addClass('unselectable');
		});

		this.addListener("dragend", function(e) {
					qx.bom.Collection.query('body').removeClass('unselectable');
				});

		this.addListener("droprequest", function(e) {

					var type = e.getCurrentType();

					var result = [];

					if (type === "html/cells") {
						var items = this.manager.getSelection();
						for (var i = 0, l = items.length; i < l; i++) {
							result.push(this.getItemData(items[i].row,
									items[i].column))
						}
					}

					e.addData(type, result);

				}, this);

	},

	members : {

		__scroller : null,

		__uploaders : null,

		_thumbnailPreview : function(reader, file, uploadId, event) {

			var image = new Image();
			image.src = reader.result;

			image.onload = qx.lang.Function.bind(function() {
				var height = image.height;
				var width = image.width;
				image = null;

				if (height > 82) {
					var scale = height / 82;
					height = parseInt(height / scale);
					width = parseInt(width / scale);
				}
				if (width > 90) {
					var scale = width / 90;
					height = parseInt(height / scale);
					width = parseInt(width / scale);
				}
        
				var html = '<div class="wrapper" id="preview-'
            + uploadId
            + '"><canvas width=20 height=20></canvas><div class="img-wrapper"><img src="'
            + event.target.result + '" height="' + height
            + '" width="' + width
            + '"></div><div class="label"><span>' + this._getTitleForFile(file)
            + '</span></div></div>';
				
         this._addPreview(uploadId, html);
				
			}, this)

		},
    
		_getTitleForFile : function (file) {
			
			var title = file.name.split('.');
			title.splice(-1,1);
			return title.join('.');
			
		},
		
		_noThumbnailPreview : function(file, uploadId) {
        var html = '<div class="wrapper" id="preview-'
            + uploadId
            + '"><canvas width=20 height=20></canvas><div class="img-wrapper"><img src="" height="" width=""></div><div class="label"><span>' 
            + this._getTitleForFile(file)
            + '</span></div></div>';
        
         this._addPreview(uploadId, html);

    },
		
		_addPreview : function(uploadId, html) {
        var item = {
          html : html,
          uploadId : uploadId
        };
        this.__uploaders[this.getNode().getPk()][uploadId].item = item;
        this.getItems().push(item);
        this.updateItems();
			
		},
		
		_noopHandler : function(evt) {
			evt.stopPropagation();
			evt.preventDefault();
		},

		_onDrop : function(e) {
			e.stopPropagation();
			e.preventDefault();
			var dt = e.dataTransfer;
			var files = dt.files;

			var totalSize = 0;

			var limit = 1 * 1024 * 1024;

			for (var i = 0; i < files.length; i++) {
				var file = files[i];

				var uploadId = Math.ceil(Math.random() * 10000).toString();
        
				// setup uploader
				var uploader = new tree.io.Uploader(file, {
              node : this.getNode().getPk()
            });

        if (typeof(this.__uploaders[this.getNode().getPk()]) == 'undefined') {
          this.__uploaders[this.getNode().getPk()] = {};
        }

        this.__uploaders[this.getNode().getPk()][uploadId] = {
          uploader : uploader,
          item : null,
          progress : new tree.ui.Progress(uploader)
        };
        
				
        // preview         
				totalSize += file.size
				if ( totalSize > limit) {
          this._noThumbnailPreview(file, uploadId);
          
				} else {
					var preview = new FileReader();
					// Firefox 3.6, WebKit
					if (preview.addEventListener) {
						preview.addEventListener('loadend', qx.lang.Function
										.bind(this._thumbnailPreview, this, preview,
												file, uploadId), false);
						// Chrome 7
					} else {
						preview.onloadend = qx.lang.Function
								.bind(this._thumbnailPreview, this, preview, file,
										uploadId);
					}
					preview.readAsDataURL(file);
				}

				

				

				uploader.addListener('changeState', qx.lang.Function.bind(
						function(node, uploadId,uploader, event) {

							var state = event.getData();
							if (state == 'complete') {

								qx.util.TimerManager.getInstance().start(
										function() {
											var item = uploader.getItem();
											var items = this.getItems();
											var found = false;
											for (var i = 0, l = items.length; i < l; i++) {
												if (items[i].uploadId == uploadId) {
													items.splice(i, 1, item);
													found = true;
													break;
												}
											}
											this.__disploseUploadObjects(node,
													uploadId);

											if (found === true) {
												this.updateItems();
											}

										}, 0, this, null, 1000);

							} else if (["error", "abort"].indexOf(state) !== -1) {
								this.__disploseUploadObjects(node, uploadId);
							}
						}, this, this.getNode(), uploadId, uploader), this);

				uploader.start();

			}
			return false;
		},

		__disploseUploadObjects : function(node, uploadId) {
			this.__uploaders[node.getPk()][uploadId].uploader.dispose();
			delete this.__uploaders[node.getPk()][uploadId];
		},

		updateItems : function() {
			var value = this.getItems();
			this.itemCount = value !== null ? value.length : 0;

			var pane = this.__scroller.getPane();
			var width = this.__scroller.getPaneSize() !== null
					? this.__scroller.getPaneSize().width
					: this.getWidth();

			var colCount = Math.floor(width / this.itemWidth);

			this.itemPerLine = colCount;
			var rowCount = Math.ceil(this.itemCount / colCount);

			pane.getColumnConfig().setItemCount(colCount);
			pane.getRowConfig().setItemCount(rowCount);

			pane.fullUpdate();

		},

		_applyItems : function(value, old) {
			if (this.getNode() !== null) {
				var uploaders = this.__uploaders[this.getNode().getPk()];
				if (typeof(uploaders) !== 'undefined') {
					for (var uploadId in uploaders) {
						if (uploaders[uploadId].uploader.getState() == 'running') {
							this.getItems().push(uploaders[uploadId].item);
						}
					}
				}

			}
			this.manager.clearSelection();
			this.updateItems();

		},

		_applyNode : function(value, old) {

			if (old !== null) {
				var uploaders = this.__uploaders[old.getPk()];
				if (typeof(uploaders) !== 'undefined') {
					for (var uploadId in uploaders) {
						uploaders[uploadId].progress.dispose();
						uploaders[uploadId].progress = null;

					}
				}
			}

			if (value !== null) {
				this.refreshNodeItems();

				var uploaders = this.__uploaders[value.getPk()];
				if (typeof(uploaders) !== 'undefined') {
					for (uploadId in uploaders) {
						var uploader = this.__uploaders[this.getNode().getPk()][uploadId];
						uploader.progress = new tree.ui.Progress(uploader.uploader);
					}
				}

			}

		},

		refreshNodeItems : function() {

			var resource = new tree.io.rest.Item();

			resource.addListener('success', function(event) {
						this.setItems(event.getData());
					}, this);

			resource.getForNode({
						id : this.getNode().getPk()
					})

		},

		_createScroller : function() {
			var scroller = new qx.ui.virtual.core.Scroller(1, this.itemPerLine,
					this.itemHeight, this.itemWidth);
			this.layer = new tree.ui.virtual.layer.HtmlCell(this);
			scroller.getPane().addLayer(this.layer);

			this.layer.addListener('updated', this._onLayerUpdated, this);

			return scroller;
		},

		getItemData : function(row, column) {
			return this.getItems()[row * this.itemPerLine + column];
		},

		isItemSelectable : function(item) {
			return !!this.getItemData(item.row, item.column)
		},

		_onMouseUp : function(event) {

			if (typeof(on_item_click) === 'undefined') {
				return
			}

			var nativeEvent = event.getNativeEvent();
			if (nativeEvent.altKey === true || nativeEvent.ctrlKey === true
					|| nativeEvent.metaKey === true
					|| nativeEvent.shiftKey === true) {
				return;
			}
			var collection = qx.bom.Collection
					.create(event.getOriginalTarget());
			if (collection.getClass().split(' ').indexOf('thumbnail') !== -1) {
				var coord = collection.getAttribute("data-item-coordinates")
						.split(',');
				var data = this.getItemData(parseInt(coord[0]),
						parseInt(coord[1]));
				if (typeof(data.uploadId) === 'undefined') {
					on_item_click(data);
				}
			}

		},

		_onPaneResize : function(e) {

			var pane = e.getTarget();
			var width = e.getData().width;

			var colCount = Math.floor(width / this.itemWidth);
			if (colCount == this.itemsPerLine) {
				return;
			}
			this.itemPerLine = colCount;
			var rowCount = Math.ceil(this.itemCount / colCount);

			pane.getColumnConfig().setItemCount(colCount);
			pane.getRowConfig().setItemCount(rowCount);

		},

		_onLayerUpdated : function() {

			// update progression of uploading items
			if (this.getNode() !== null) {
				var uploaders = this.__uploaders[this.getNode().getPk()];
				if (typeof(uploaders) !== 'undefined') {
					for (var uploadId in uploaders) {

						var element = qx.bom.Collection.query('#preview-'
								+ uploadId);
						if (element.length == 1) {
							uploaders[uploadId].progress.setElement(element)
						}
						/*
						 * if (uploaders[uploadId].uploader.getState() ==
						 * 'running') {
						 * 
						 * this.updateItemProgession(uploadId,
						 * uploaders[uploadId].uploader .getPercentComplete()); }
						 */
					}
				}
			}

		},

		styleSelectable : function(item, type, wasAdded) {
			this.layer.updateLayerData();
		},
		/*
		 * updateItemProgession : function(uploadId, percent) {
		 * 
		 * var canvas = qx.bom.Collection.query('#preview-' + uploadId + '
		 * canvas')[0]
		 * 
		 * if (typeof(canvas) !== 'undefined' && typeof(canvas.getContext) !==
		 * 'undefined') { var ctx = canvas.getContext('2d');
		 * 
		 * ctx.beginPath(); ctx.arc(10.001, 10.001, 2.5, 0, Math.PI * 2, false);
		 * ctx.strokeStyle = "#FEFEFE"; ctx.lineWidth = 5.001; ctx.stroke();
		 * 
		 * ctx.beginPath(); ctx.arc(10.001, 10.001, 4.9, 0, Math.PI * 2, false);
		 * ctx.strokeStyle = "#DDD"; ctx.lineWidth = 0.9; ctx.stroke();
		 * 
		 * ctx.beginPath(); ctx.arc(10.001, 10.001, 2.5, 0, (Math.PI * 2) / 100 *
		 * percent, false); ctx.strokeStyle = "#309BBF"; ctx.lineWidth = 5.001;
		 * ctx.stroke(); }
		 *  },
		 */
		getCellProperties : function(row, column) {
			var itemData = this.getItemData(row, column);

			if (!itemData) {
				return "";
			}

			var isSelected = this.manager.isItemSelected({
						row : row,
						column : column
					});
			var color = "";

			return {
				style : ["position: absolute;", "text-align: center;",
						this._fontCss, color].join(""),
				classes : 'thumbnail '
						+ (isSelected ? 'thumbnail-selected' : ''),
				content : itemData.html,
				attributes : "data-item-coordinates='" + row + "," + column
						+ "'"
			};
		}

	},

	destruct : function() {
		this._disposeObjects("layer");
		this._disposeObjects("manager");

	}
});