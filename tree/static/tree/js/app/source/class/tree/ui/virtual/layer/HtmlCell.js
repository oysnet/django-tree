qx.Class.define("tree.ui.virtual.layer.HtmlCell",
{
  extend : qx.ui.virtual.layer.HtmlCell,
  
  events : {
    'updated' : 'qx.event.type.Event'
  },
  
  members : {
    _fullUpdate : function(firstRow, firstColumn, rowSizes, columnSizes) {
    
      this.base(arguments, firstRow, firstColumn, rowSizes, columnSizes);
      
      qx.html.Element.flush();
      this.fireEvent('updated');
    }
  }
  
});
