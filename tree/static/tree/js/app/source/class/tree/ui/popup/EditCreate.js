qx.Class.define("tree.ui.popup.EditCreate", {
      extend : tree.ui.popup.Base,
      
      construct : function() {
        this.base(arguments);
        
        this.addListener('keypress',function (event) {
           
          if (event.getKeyIdentifier() === 'Escape') {
            this.close();
          }
          
        },this);
        
      },
      
      properties : {
        valid : {check : "Boolean", init : false, event : "changeValid"},
        text : {init : '', event:'changeText'},
        fieldNameValue : {init : '', event:'chanegFieldNameValue'}
        
      },
      
      events : {
        'continue' : 'qx.event.type.Data'
      },
      
      members : {
      	__fieldName : null,
      	
        _constructInterface : function() {
          
          var label = new qx.ui.basic.Label('');
          this.add(label);
          
          this.bind('text',label, 'value');
          
          var fieldName = new qx.ui.form.TextField();
          this.add(fieldName);
          this.__fieldName = fieldName;
          fieldName.setLiveUpdate(true);
          fieldName.addListener('changeValue',this.__checkValid,this);
          fieldName.focus();
          this.bind('fieldNameValue', fieldName, 'value');
          
          fieldName.addListener('keypress', function (event) {
          	if (this.isValid() && event.getKeyIdentifier() === 'Enter') {
          		this.fireDataEvent('continue', fieldName.getValue());
              this.destroy();
          	}
          } ,this);
          
          var hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10, "right"));
          this.add(hbox);
          
          var save = new qx.ui.form.Button(this.tr('save'));
          hbox.add(save);
          save.addListener('execute',function () {
           this.fireDataEvent('continue', fieldName.getValue());
           this.destroy();
          },this);
          
          var cancel = new qx.ui.form.Button(this.tr('cancel'));
          hbox.add(cancel);
          cancel.addListener('execute',function () {
           this.destroy();
          },this);

          //bindings
          this.bind('valid', save, 'enabled');
          
          
          
          
        },
        
        __checkValid :function () {
          
        	var valid = false;
        	
        	if (this.__fieldName.getValue().trim().length > 0) {
              valid = true;        		
        	}
        	
        	this.setValid(valid);
        	
        }
      }
    });
