from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes import generic

class Node(MPTTModel):
    name = models.CharField(max_length=50)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children')
    
    def __unicode__(self):
        return ' / '.join([node.name for node in self.get_ancestors(ascending=False)] + [self.name])
    
    class MPTTMeta:
        order_insertion_by = ['name']
        
    class Meta:
        verbose_name = 'Tree Explorer'
        verbose_name_plural = 'Tree Explorer'
        ordering = ('name',)
        unique_together=('name', 'parent')
        
class NodeItem(models.Model):
    
    node = models.ForeignKey(Node)
    
    content_type = models.ForeignKey(ContentType)
    object_id = models.PositiveIntegerField(db_index=True)
    content_object = generic.GenericForeignKey('content_type', 'object_id')