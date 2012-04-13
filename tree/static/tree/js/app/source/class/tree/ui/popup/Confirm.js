qx.Class.define("tree.ui.popup.Confirm", {
      extend : tree.ui.popup.Base,

      construct : function() {
        this.base(arguments, this.tr('Confirm'));
         this.setShowClose(true);
      },
      
      properties : {
        text : {init : '', event:'changeText'}
      },
      
      events : {
        'continue' : 'qx.event.type.Event'
      },
      
      members : {
        _constructInterface : function() {
          
        	var label = new qx.ui.basic.Label('');
        	this.add(label);
          this.bind('text',label, 'value');
          
        	var hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10, "right"));
          this.add(hbox);
        	
          var btnContinue = new qx.ui.form.Button(this.tr('continue'));
          btnContinue.addListener('execute', function () {
            this.fireEvent('continue');
            this.destroy();
          },this);
          hbox.add(btnContinue);
          
        	var btnCancel = new qx.ui.form.Button(this.tr('cancel'));
        	btnCancel.addListener('execute', this.destroy,this);
        	hbox.add(btnCancel);
        	
        	btnCancel.focus();
        	
        }
      }
    });
