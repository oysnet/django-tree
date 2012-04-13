qx.Class.define("tree.ui.popup.Waiting", {
      extend : tree.ui.popup.Base,

      construct : function() {
        this.base(arguments, this.tr('Wait'));
        this.setCloseOnEscape(false);
      },
      
      
      members : {
        
        _constructInterface : function() {
          
        	this.add(new qx.ui.basic.Label(this.tr('Please wait...')))
          
        }
      }
    });
