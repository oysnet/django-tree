from django.conf import settings as django_settings
from django.contrib.contenttypes.models import ContentType
from django.db.utils import DatabaseError
from django.utils.importlib import import_module


TREE_HELPERS = {}
MIME_TYPES = {}

try:
    for key, value in getattr(django_settings, 'TREE_HELPERS', {}).iteritems():

        ct = ContentType.objects.get_by_natural_key(*key.split('.'))

        for m in ['get', 'create']:
            mod = import_module('.'.join(value[m].split('.')[:-1]))
            fn = getattr(mod, value[m].split('.')[-1])

            if not callable(fn):
                raise Exception('%s is not callable' % value[m])

            try:
                TREE_HELPERS[ct][m] = fn
            except KeyError:
                TREE_HELPERS[ct] = {m : fn}

        if value.has_key('mimetypes'):

            for m in value['mimetypes']:

                MIME_TYPES[m] = TREE_HELPERS[ct]['create']

except (DatabaseError, ContentType.DoesNotExist) as e:
    if isinstance(e, DatabaseError):
        reason = "syncdb hasn't been called yet"
    else:
        reason = "migrate hasn't been called yet"
    print "Impossible to initialize TREE_HELPERS and MIME_TYPES because %s" % reason
