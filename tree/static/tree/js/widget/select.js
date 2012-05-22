function dismissTreeLookUpPopup(win, item) {
    var name = windowname_to_id(win.name);
    var elem = document.getElementById(name);
    
    document.getElementById(name).value = item.pk;
    document.getElementById('id_tree_path_' + name).value = item.path;
    elem.focus();
    win.close();
  }

  
function showTreeLookupPopup(triggeringLink, cb) {
    var name = triggeringLink.id.replace(/^lookup_/, '');
    name = id_to_windowname(name);
    var href;
    if (triggeringLink.href.search(/\?/) >= 0) {
        href = triggeringLink.href + '&pop=1';
    } else {
        href = triggeringLink.href + '?pop=1';
    }
    var treePath = document.getElementById('id_tree_path_' + name).value;
    if (treePath != '') {
      href += "&path=" + treePath;
    }
    href += '&opener_callback=' + cb.name;
    
    var win = window.open(href, name, 'height=500,width=980,resizable=yes,scrollbars=no');
    //win.treeCallback = cb;
    win.focus();
    return false;
}
