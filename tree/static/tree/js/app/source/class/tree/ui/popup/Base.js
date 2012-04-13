qx.Class.define("tree.ui.popup.Base", {
			extend : qx.ui.window.Window,

			properties : {
				closeOnEscape : {
					init : true,
					apply : '_applyCloseOnEscape'
				}
			},

			construct : function(caption, icon) {
				this.base(arguments, caption, icon);
				this.setLayout(new qx.ui.layout.VBox(10));

				this._constructInterface();

				this.center();
				this.setShowClose(false);
				this.setShowMaximize(false);
				this.setShowMinimize(false);
				this.setModal(true);
				this.setWidth(250);
				this.show();

				this.addListener("resize", function() {
							this.center();
						}, this);

				this.initCloseOnEscape();

			},

			members : {

				__onKeyPressListenerId : null,

				_applyCloseOnEscape : function(value, old) {
					if (value === true) {
						this.__onKeyPressListenerId = this.addListener(
								'keypress', this.__onKeyPress, this);
					} else if (this.__onKeyPressListenerId !== null) {
						this.removeListenerById(this.__onKeyPressListenerId);
						this.__onKeyPressListenerId = null;
					}
				},

				__onKeyPress : function(event) {
					if (event.getKeyIdentifier() === 'Escape') {
						this.close();
					}
				},

				_constructInterface : function() {

				}
			}
		});
