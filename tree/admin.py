from django.contrib import admin
from models import Node, NodeItem
   
from django.contrib.admin.views.main import ChangeList

class NodeChangeList(ChangeList):
    
    def __init__(self, request, *args, **kwargs):
        params = dict(request.GET.items())
        try:
            del params['path']
        except:
            pass
        
        request.GET = params
        super(NodeChangeList, self).__init__(request, *args, **kwargs)
        
   
class NodeAdmin(admin.ModelAdmin):
    
    def get_changelist(self, request, **kwargs):
        return NodeChangeList
    
   
admin.site.register(Node, NodeAdmin)
admin.site.register(NodeItem)


