from django.conf.urls.defaults import patterns, include, url
from views import ChildrenView, NodeView, MoveItems, NodeItemView, MoveNode,Upload,LoadPath

urlpatterns = patterns('',
    (r'^getChildrenOf/(?P<pk>\d+)/$', ChildrenView.as_view(), {}, "children_node_view"),
    (r'^getRoot/$', ChildrenView.as_view(), {}, "root_nodes_view"),
    (r'^loadPath/$', LoadPath.as_view(), {}, "path_nodes_view"),
    
    (r'^node/(?P<pk>\d*)/?$', NodeView.as_view(), {}, "node_view"),
    (r'^items/(?P<pk>\d*)/?$', NodeItemView.as_view(), {}, "node_item_view"),
    (r'^moveitems/?$', MoveItems.as_view(), {}, "node_moveitems_view"),
    
    (r'^movenode/?$', MoveNode.as_view(), {}, "node_movenode_view"),
    (r'^upload/?$', Upload.as_view(), {}, "item_upload"),
    
)


