qx.Class.define("tree.io.rest.Resource", {
  extend : qx.io.rest.Resource,
  
  construct : function(map) {
    this.base(arguments, map);/*
    this.configureRequest(function(req, action, params, data) {
      if (action == 'save') {
        req.setRequestHeader('Content-Type', 'application/json');
      }
    });*/
  }
});