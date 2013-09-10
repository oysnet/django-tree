from django.contrib import admin
from models import Node, NodeItem
   
from django.contrib.admin.views.main import ChangeList
from django.http import  QueryDict

class NodeChangeList(ChangeList):
    
    def __init__(self, request, *args, **kwargs):
        params = request.GET.copy()
        try:
            del params['path']
        except:
            pass
        
        try:
            del params['opener_callback']
        except:
            pass
        
        
        try:
            del params['CKEditorFuncNum']
        except:
            pass
        
        
        request.GET = params
        super(NodeChangeList, self).__init__(request, *args, **kwargs)
        
   
class NodeAdmin(admin.ModelAdmin):
    
    def get_changelist(self, request, **kwargs):
        return NodeChangeList
    
   
admin.site.register(Node, NodeAdmin)
admin.site.register(NodeItem)


