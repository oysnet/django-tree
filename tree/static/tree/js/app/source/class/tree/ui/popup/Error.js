qx.Class.define("tree.ui.popup.Error", {
      extend : tree.ui.popup.Base,

      construct : function(error) {
      	this.__error = error;
        this.base(arguments, this.tr('Error'));
         this.setShowClose(true);
      },
      
      
      members : {
        __error : null,
        _constructInterface : function() {
          
        	if (this.__error === null || this.__error.trim() == '') {
        	 
        		this.__error = this.tr('unknow error');
        		
        	}
        	
        	this.add(new qx.ui.basic.Label(this.__error))
          
        	var hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10, "right"));
          this.add(hbox);
        	
        	var btnClose = new qx.ui.form.Button(this.tr('close'));
        	btnClose.addListener('execute', this.close,this);
        	hbox.add(btnClose);
        	btnClose.focus();
        }
      }
    });
