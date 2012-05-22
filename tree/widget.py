from django.forms.widgets import  Input
from django.forms.util import flatatt
from django.utils.safestring import mark_safe
from django.utils.encoding import force_unicode
from django.core.urlresolvers import reverse
from django.contrib.contenttypes.models import ContentType
from tree.models import Node, NodeItem
from tree.helpers import get_user_defined_data


class TreeSelect(Input):
    input_type = 'text'

    def __init__(self, attrs=None, model = None):
        self.model = model
        super(TreeSelect, self).__init__(attrs)
        
    
    def _get_data_item_from_value(self, value):
        if self.model is not  None:
            return get_user_defined_data(self.model.objects.get(pk=value))
        else:
            return {}
    
    def _get_tree_popup_url(self):
        ct = ContentType.objects.get_for_model(Node)
        return reverse('admin:%s_%s_changelist' %(ct.app_label,  ct.model) )
    
    def _get_tree_path(self, value):
        
        node_item = NodeItem.objects.get(content_type=ContentType.objects.get_for_model(self.model), object_id=value)
        return  '/'.join([str(node.pk) for node in [node_item.node.get_root()] + list(node_item.node.get_ancestors(include_self=True))] + [str(node_item.pk)])
        
    
    def render(self, name, value, attrs=None, choices=()):
        if value is None: value = ''
        
        final_attrs = self.build_attrs(attrs, type=self.input_type, name=name)
        tree_path = ''
        
        if value != '':
            # Only add the 'value' attribute if a value is non-empty.
            final_attrs['value'] = force_unicode(self._format_value(value))
            tree_path = self._get_tree_path(value)
            
            
        url = self._get_tree_popup_url()
        return mark_safe(u'<div class="tree-select"><input%(attrs)s/><input type="hidden" name="tree_path_%(id)s" id="id_tree_path_%(id)s" value="%(tree_path)s" ><a href="%(popurl)s" class="related-lookup" id="lookup_%(id)s" onclick="return showTreeLookupPopup(this, dismissTreeLookUpPopup);">open</a></div>' 
                         % {'attrs': flatatt(final_attrs), 'popurl': url, 'id':final_attrs['id'],  'tree_path' : tree_path})
        
    class Media:
        css = {
            "all": ("tree/css/widget/select.css",)
        }
        js = ('tree/js/widget/select.js', )

    

    