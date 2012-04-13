qx.Class.define("tree.io.rest.Node", {
			extend : tree.io.rest.Resource,

			construct : function() {

				var map = {
					"create" : {
						method : "POST",
						url : '/tree/node/'
					},
					"update" : {
						method : "PUT",
						url : '/tree/node/{id}/'
					},
					"del" : {
						method : "DELETE",
						url : '/tree/node/{id}/'
					},
					"getRoot" : {
						method : "GET",
						url : '/tree/getRoot/'
					},
					"getChildren" : {
						method : "GET",
						url : '/tree/getChildrenOf/{id}/'
					},
					"moveToNode" : {
            method : "POST",
            url : '/tree/movenode/'
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