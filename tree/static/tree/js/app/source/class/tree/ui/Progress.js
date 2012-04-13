qx.Class.define("tree.ui.Progress", {
			extend : qx.core.Object,

			properties : {
				element : {
					init : null,
					apply : '_applyElement'
				},
				percentComplete : {
					init : 0,
					apply : '_applyPercentComplete'
				}
			},
			construct : function(uploader) {

				this.base(arguments);
				this.__uploader = uploader;
				this.__uploaderBinding = uploader.bind('percentComplete', this,
						'percentComplete');
				this.__timerId = qx.util.TimerManager.getInstance().start(
						this._update, 150, this);

				uploader.addListener('changeState',
						this._onUploaderChangeState, this);

			},

			members : {
				__tick : 0,
				__timerId : null,
				__uploader : null,
				__uploaderBinding : null,
        
				_onUploaderChangeState : function(event) {

					switch (event.getData()) {

						case "running" :
							break;

						case "error" :
							break;

						case "complete" :
						  // in one second this objets will be destroyed !						
							break;

					}

				},

				_update : function() {
					this.__tick++;
					this.__refresh()
				},

				_applyElement : function(value, old) {
					this.__refresh();
				},

				_applyPercentComplete : function(value, old) {
					this.__refresh();
				},

				__refresh : function() {

					if (this.getElement() === null) {
						return;
					}

					var canvas = this.getElement().children('canvas')[0];

					var ctx = canvas.getContext('2d');
					var percent = this.getPercentComplete();

					ctx.beginPath();
					ctx.arc(10.001, 10.001, 4.1, 0, Math.PI * 2, false);
					ctx.strokeStyle = "#FEFEFE";
					ctx.lineWidth = 5.001;
					ctx.stroke();
          
          

          
/*          
					ctx.beginPath();
					ctx.arc(10.001, 10.001, 4.9, 0, Math.PI * 2, false);
					ctx.strokeStyle = "#DDD";
					ctx.lineWidth = 0.9;
					ctx.stroke();
*/
					             
          if(percent > 99) {
            ctx.beginPath();
            ctx.arc(10.001, 10.001, 2.5, 0, (Math.PI * 2) / 100
                    * percent, false);
            ctx.lineWidth = 5.001;     
            ctx.strokeStyle = "#6EAB68";
            ctx.stroke();
          }
          else {
            ctx.beginPath();
            ctx.arc(10.001, 10.001, 2.5, 0, (Math.PI * 2) / 100
                    * percent, false);
            ctx.lineWidth = 5.001;     
            ctx.strokeStyle = "#309BBF";
            ctx.stroke();
            var a = this.__tick/2 % (Math.PI * 2)
            for(var i=0;i<20;i++) {
              ctx.beginPath();
              ctx.arc(10.001, 10.001, 6, a+(Math.PI/10*i), a+Math.PI/10*(i+1), false);
              if(i%2 == 0) {
                ctx.strokeStyle = "rgba(100,100,200,0.2)";
                 ctx.lineWidth = 1.001;
              ctx.stroke();
              } else {
                ctx.strokeStyle = "rgba(250,250,255,0.2)";
              }
             
            }
            
            
          }
				}
			},

			destruct : function() {
				qx.util.TimerManager.getInstance().stop(this.__timerid);
				this.__uploader.removeBinding(this.__uploaderBinding);
			}
		});