from django.forms.widgets import  Input
from django.forms.util import flatatt
from django.utils.safestring import mark_safe
from django.utils.encoding import force_unicode
from django.core.urlresolvers import reverse
from django.contrib.contenttypes.models import ContentType
from tree.models import Node
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
    
    def render(self, name, value, attrs=None, choices=()):
        if value is None: value = ''
        
        final_attrs = self.build_attrs(attrs, type=self.input_type, name=name)
        if value != '':
            # Only add the 'value' attribute if a value is non-empty.
            final_attrs['value'] = force_unicode(self._format_value(value))
        
        url = self._get_tree_popup_url()
        return mark_safe(u'<input%s/> <a href="%s" class="related-lookup" id="lookup_%s" onclick="return showTreeLookupPopup(this, dismissTreeLookUpPopup);">open</a>' % (flatatt(final_attrs), url, final_attrs['id']))
    
    class Media:
        
        js = ('tree/js/widget/select.js', )

    

    