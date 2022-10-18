"""Sample URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include, re_path
from django.views.static import serve
from django.contrib import admin
from Skcone import views
from django.conf import settings
from ms_identity_web.django.msal_views_and_urls import MsalViews
from django.utils.translation import gettext_lazy as _
from django.conf.urls.i18n import i18n_patterns


msal_urls = MsalViews(settings.MS_IDENTITY_WEB).url_patterns()

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('', views.index, name='index'),
    path('Dashboard', views.dashboard, name='dashboard'),
    path('History', views.history, name='history'),
    path('Contact', views.contact, name='contact'),
    
    
    path('sign_in_status', views.index, name='status'),
    path('token_details', views.token_details, name='token_details'),
    path('call_ms_graph', views.call_ms_graph, name='call_ms_graph'),
    path(f'{settings.AAD_CONFIG.django.auth_endpoints.prefix}/', include(msal_urls)), # our pre-configured msal URLs
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT})  # for static files
]

urlpatterns += i18n_patterns(
    path('i18n/', include('django.conf.urls.i18n')),
    #re_path('', include('Sample.urls')),
)

if 'rosetta' in settings.INSTALLED_APPS:
    urlpatterns += [
        re_path(r'^rosetta/', include('rosetta.urls'))
    ]