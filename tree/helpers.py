from django.contrib.contenttypes.models import ContentType
import settings as tree_settings
from django.core.urlresolvers import reverse
from models import NodeItem

def get_user_defined_data(obj, ct = None):
    
    if ct is None:
        ct = ContentType.objects.get_for_model(obj)
    
    return tree_settings.TREE_HELPERS[ct]['get'](obj)

def get_data_for_item(item):
    
    ct = ContentType.objects.get_for_model(item.content_object)
    
    d = get_user_defined_data(item.content_object, ct)
    
    d.update({'itemPk' : item.pk, 
              'admin_change_url' : reverse('admin:%s_%s_change' %(ct.app_label,  ct.model),  args=[item.content_object.pk] ),
              'pk' :  item.content_object.pk,
              'ct' : ct.pk})
    
    return d


def get_tree_path(obj):
    
    node_item = NodeItem.objects.get(content_type=ContentType.objects.get_for_model(obj), object_id=obj.pk)
    return  '/'.join([str(node.pk) for node in [node_item.node.get_root()] + list(node_item.node.get_ancestors(include_self=True))] + [str(node_item.pk)])

class TreeWidgetAdmin(object):
    "Admin mixin used to override widget in admin form"
    
    formfield_named_overrides = None
    
    def formfield_for_dbfield(self, db_field, **kwargs):
        
        if self.formfield_named_overrides is not None and self.formfield_named_overrides.get(db_field.name, None) is not None:
            kwargs['widget'] = self.formfield_named_overrides[db_field.name](model = db_field.related.parent_model)
            
        return super(TreeWidgetAdmin, self).formfield_for_dbfield(db_field, **kwargs)