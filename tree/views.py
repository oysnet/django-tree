from django.views.generic.base import View
from django.views.generic.detail import SingleObjectMixin
from models import Node
from django.http import HttpResponse
from django.utils import simplejson
from django.views.decorators.csrf import csrf_exempt
from tree.models import NodeItem
from tree import settings as tree_settings
from tree.helpers import get_data_for_item
import re
from django.db import models

    
class Upload(View):
    
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        
        item = NodeItem(node=Node.objects.get(pk=request.POST.get('node')))
        
        f = request.FILES['file']
        o = tree_settings.MIME_TYPES[f.content_type](f)
        
        item.content_object = o
        item.save()
                
        return HttpResponse(simplejson.dumps(get_data_for_item(item)), content_type="application/json")
    

class MoveItems(View):
    
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        
        if request.method in ['POST', 'PUT'] and 'application/json' in request.META['CONTENT_TYPE']:
            request.DATA = simplejson.loads(request.read())
        
        return super(MoveItems, self).dispatch(request, *args, **kwargs)
    
    def post(self,request, *args, **kwargs):
        
        
        items = request.DATA.get('items');
        node = request.DATA.get('node')
        
        NodeItem.objects.filter(pk__in=items).update(node=Node.objects.get(pk=node))        
        
        return HttpResponse()



class MoveNode(View):
    
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        if request.method in ['POST', 'PUT'] and 'application/json' in request.META['CONTENT_TYPE']:
            request.DATA = simplejson.loads(request.read())
        
        return super(MoveNode, self).dispatch(request, *args, **kwargs)
    
    def post(self,request, *args, **kwargs):
        
        
        target = Node.objects.get(pk=request.DATA.get('target'));
        node = Node.objects.get(pk=request.DATA.get('node'))
        count = target.children.filter(models.Q(name=node.name) | models.Q(name__regex=r'^%s \([0-9]+\)$' % node.name)).count()
        if count > 0:
            
            q = target.children.filter(name__regex=r'^%s \([0-9]+\)$' % node.name)
            if q.count() > 0:
                name = q.order_by('-name')[0].name
                count = int(re.match('.* \(([0-9+])\)', name).group(1))
            
            node.name = node.name + " (%s)" % (count + 1)
            node.save() # mptt sucks
        
        node.parent = target
        node.save()
        
        return HttpResponse(simplejson.dumps({'name' : node.name, 'position' : list(Node.objects.get(pk=request.DATA.get('target')).get_children()).index(node)}), content_type="application/json")

class NodeItemView(SingleObjectMixin, View):
    
    model = Node
    
    def get(self,request, *args, **kwargs):
        
        node = self.get_object()
        
        items = []
        
        for item in NodeItem.objects.filter(node=node):
            """
            ct = ContentType.objects.get_for_model(item.content_object)
            d = tree_settings.TREE_HELPERS[ct](item.content_object)
            
            
            d.update({'itemPk' : item.pk, 
                      'admin_change_url' : reverse('admin:%s_%s_change' %(ct.app_label,  ct.model),  args=[item.content_object.pk] ),
                      'pk' :  item.content_object.pk,
                      'ct' : ct.pk})
            """
            items.append(get_data_for_item(item))
        
        
        return HttpResponse(simplejson.dumps(items), content_type="application/json")
        

class NodeView(SingleObjectMixin, View):
    
    model = Node
    
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        
        if request.method == 'PUT':
            request.method = 'POST'
            request._load_post_and_files()
            request.PUT = request.POST
            request.method = 'PUT'
            
        return super(NodeView, self).dispatch(request, *args, **kwargs)
    
    def delete(self,request,  *args, **kwargs):
        
        node = self.get_object()
        if node.children.all().count() > 0 or NodeItem.objects.filter(node=node).count()>0:
            return HttpResponse("Directory not empty", status=403)
        
        node.delete()
        
        return HttpResponse(status=204)
    
    def put(self,request,  *args, **kwargs):
        
        node = self.get_object()
        
        if Node.objects.filter(name=request.PUT.get('name'), parent=node.parent).exclude(pk=node.pk).count() > 0:
            return HttpResponse("This name already exists", status=400)
        
        node.name = request.POST.get('name')
        node.save()
        
        return HttpResponse('')
    
    def post(self,request,  *args, **kwargs):
        
        # check name is free
        
        if Node.objects.filter(parent=request.POST.get('parent'), name=request.POST.get('name')).count() > 0:
            return HttpResponse("This name already exists", status=400)
        
        node = Node(parent_id=request.POST.get('parent'), name=request.POST.get('name'))
        node.save()
        
        return HttpResponse(simplejson.dumps({
                    'name' : node.name,
                    'icon' : 'default',
                    'loaded' : True,
                    'pk' : node.pk,
                    'position' : list(node.parent.get_children()).index(node),
                    'children' : [],
                    'parent' : node.parent.pk if node.parent is not None else None
                }), content_type="application/json", status=201)
        
class ChildrenView(SingleObjectMixin, View):
    
    model = Node
    
    def get(self,request, *args, **kwargs):
        
        parent = None
        
        if kwargs.get('pk',None) is not None:
            parent = self.get_object()
            
            children = parent.get_children()
            
        else:
            
            children = Node.objects.filter(parent=None)
            
            if children.count() == 0:
                node = Node(name="root")
                node.save()
                children = [node]
            
        json = []
        
        for child in children:
            
            json.append({
                    'name' : child.name,
                    'icon' : 'default',
                    'loaded' : child.is_leaf_node(),
                    'pk' : child.pk,
                    'children' : [],
                    'parent' : child.parent.pk if child.parent is not None else None
                })
            
            if not child.is_leaf_node():
                json[-1]['children'] = [{
                                'name' : "Loading",
                                'icon' : "loading"
                            }]
                
        return HttpResponse(simplejson.dumps(json), content_type="application/json")