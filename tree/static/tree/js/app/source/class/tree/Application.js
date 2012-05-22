/* ************************************************************************

   Copyright:

   License:

   Authors:

 ************************************************************************ */

/* ************************************************************************

 #asset(tree/*)
 #ignore(STATIC_URL)
 ************************************************************************ */

/**
 * This is the main application class of your custom application "tree"
 */
qx.Class.define("tree.Application", {
	extend : qx.application.Inline,

	/*
	 *****************************************************************************
	   MEMBERS
	 *****************************************************************************
	 */

	members : {
		
		
		main : function() {
			
			if(typeof(STATIC_URL) !== 'undefined') {
				 
				 var static_url = STATIC_URL;
				
				 if (static_url.substr(-1) !== '/') {
				 	static_url += '/';
				 }
				
			   qx.$$libraries.qx.resourceUri  = static_url + 'tree/js/app/build/resource';
			   qx.$$libraries.tree.resourceUri  = static_url + 'tree/js/app/build/resource';
			}
			
			// Call super class
			this.base(arguments);

			// Enable logging in debug variant
			if (qx.core.Environment.get("qx.debug")) {
				// support native logging capabilities, e.g. Firebug for Firefox
				qx.log.appender.Native;
				// support additional cross-browser console. Press F7 to toggle visibility
				qx.log.appender.Console;
			}
      
			
			
			// Hint: the second and the third parameter control if the dimensions
			// of the element should be respected or not.
			var htmlElement = document.getElementById("tree-container");
			var inlineIsle = new qx.ui.root.Inline(htmlElement, true, true);

			// use VBox layout instead of basic
			inlineIsle.setLayout(new qx.ui.layout.Grow);
			
			var pane = new qx.ui.splitpane.Pane("horizontal");
			inlineIsle.add(pane);
			
			var path = getQueryVariable('path'), item = null;
			if (path != null) {
			 path = path.split('/');
			  item = path.pop();
			  path = path.join("/")
			}
			
			
			var t = new tree.ui.tree.Tree(path);
			var gallery = new tree.ui.gallery.Gallery(null, t);
      
			if (item !== null) {
				gallery.addListenerOnce('itemsloaded',function () {
				gallery.selectItem(item);
				})
			}
			
			pane.add(t);
			pane.add(gallery, 5);
			
      
			t.bind('selection[0]', gallery, 'node')
			t.addListener('dropend',gallery.refreshNodeItems, gallery);
		}
	}
});