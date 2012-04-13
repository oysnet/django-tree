# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import tree

setup(
    name='django-tree',
    version = tree.__version__,
    description='Tree manager/explorer for django',
    long_description="""""",
    author = tree.__author__,
    author_email='contact@oxys.net',
    url='https://github.com/oxys-net/django-tree',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    classifiers=[
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: Apache License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Utilities',
    ],
    install_requires = ["django-mptt"]
)

