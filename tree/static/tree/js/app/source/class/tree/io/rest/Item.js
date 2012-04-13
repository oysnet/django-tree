qx.Class.define("tree.io.rest.Item", {
			extend : tree.io.rest.Resource,

			construct : function() {

				var map = {
					"getForNode" : {
						method : "GET",
						url : '/tree/items/{id}/'
					},
					"moveToNode" : {
						method : "POST",
						url : '/tree/moveitems/'
					}
				}

				this.base(arguments, map);

				this.configureRequest(function(req, action, params, data) {
							if (action == 'moveToNode') {
								req.setRequestHeader('Content-Type',
										'application/json');
							}
						});

			}
		});