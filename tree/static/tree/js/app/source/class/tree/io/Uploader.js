/*
#ignore(FormData) 
*/

qx.Class.define("tree.io.Uploader", {
	extend : qx.core.Object,

	construct : function(file, formExtraData) {

		this.base(arguments);
		
		if (typeof(formExtraData) == 'undefined') {
		  formExtraData = {};
		}
		this._formExtraData = formExtraData;
		this._file = file;
	},
  
	properties : {
		percentComplete : {init : 0, event : 'changePercentComplete'},
		state : {check : ["waiting", "running", "complete", "abort", "error"], init : "waiting", event : "changeState"},
		error : {init : null},
		item : {init : null}
	},
	
	
	members : {
    
		_file : null,
		_formExtraData : null,
		_uploadUrl : '/tree/upload/',
		
		start : function() {
			
			this.setState("running");
			/*
			setInterval(qx.lang.Function.bind(function () {
				var p = this.getPercentComplete() + 1;
				if (p==100) {
				  p = 0;
				}
				this.setPercentComplete(p);
			},this),50);
			
			return;
			*/
			var form = new FormData();
      form.append('file', this._file);
      
      for (var key in this._formExtraData) {
      	form.append(key, this._formExtraData[key])
      }
      
      var xhr = new XMLHttpRequest();
      xhr.upload.addEventListener("progress", qx.lang.Function.bind(
                  this._loadProgress, this), false);
                  
      xhr.addEventListener("load", qx.lang.Function.bind(function (event) {
      	if (xhr.status == '200') {
      		this.setItem(qx.lang.Json.parse(xhr.responseText));
      	  this.setState("complete");
      	  
      	} else {
      	   this.setState("error");
      	}
               
      },this), false);
      
      xhr.addEventListener("error", qx.lang.Function.bind(function () {
        this.setState("error");
        this.setError('Upload error');
      },this), false);
      
      xhr.addEventListener("abort", function () {
         this.setState("abort");
      }, false);
      
      xhr.open("POST", this._uploadUrl);
      xhr.send(form);
			
		},
    
		
		_loadProgress : function(event) {
			if (event.lengthComputable) {
				var percentComplete = Math.round(event.loaded * 100 / event.total);
				this.setPercentComplete(percentComplete);
			}
		}
	}

});
