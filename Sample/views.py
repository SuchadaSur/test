from django.shortcuts import render
from django.conf import settings
import requests
from django.shortcuts import redirect
ms_identity_web = settings.MS_IDENTITY_WEB

def index(request):
    if request.identity_context_data.authenticated:
        # print('Logged in')
        # all_Request = testRequest.objects.all()
        # status_wait= all_Request.filter(docStatus__startswith='w')
        # print(results[0]['picture_url'])

        # tenant_id = 'eef38a1f-720f-4ede-9c7a-79ef6d5dd342'
        # Header = {
        #     "Content-Type" : 'application/x-www-form-urlencoded'
        # }
        # Body = {
        #     "client_id" : '354b3536-f190-496d-8a97-bfe4dd9215f8',
        #     "grant_type" : 'client_credentials',
        #     "scope" : '354b3536-f190-496d-8a97-bfe4dd9215f8/.default',
        #     "client_secret" : 'XCC8Q~jrI4KzCoRDskSzLNTUjs2BUmMRsY~6kcz7'
        # }
        # token_azure_ad_url = 'https://login.microsoftonline.com/eef38a1f-720f-4ede-9c7a-79ef6d5dd342/oauth2/v2.0/token'
        # result = requests.get(token_azure_ad_url,headers=Header,data=Body).json()

        # print(result['access_token'])
        # token_azure_ad = result['access_token']
        # pic_url = url_pic(request)
        return render(request, 'auth/status.html')
    else:
        print('index page')
        return redirect('sign_in')

def dashboard(request):
    if request.identity_context_data.authenticated:
        # pic_url = url_pic(request)
        return render(request, 'auth/dashboard.html')
    else:
        return redirect('sign_in')

def history(request):
    if request.identity_context_data.authenticated:
    #     all_Request = testRequest.objects.all()
    #     status_test= all_Request.filter(docStatus__startswith='a' ) | all_Request.filter(docStatus__startswith='r' )
    #     pic_url = url_pic(request)
        return render(request, 'auth/history.html')
    else:
        print('index page')
        return redirect('sign_in')

def contact(request):
    if request.identity_context_data.authenticated:
        # pic_url = url_pic(request)
        return render(request, 'auth/contact.html')
    else:
        return redirect('sign_in')

@ms_identity_web.login_required
def token_details(request):
    return render(request, 'auth/token.html')

@ms_identity_web.login_required
def call_ms_graph(request):
    ms_identity_web.acquire_token_silently()
    graph = 'https://graph.microsoft.com/v1.0/users'
    authZ = f'Bearer {ms_identity_web.id_data._access_token}'
    results = requests.get(graph, headers={'Authorization': authZ}).json()

    if 'value' in results:
        results ['num_results'] = len(results['value'])
        results['value'] = results['value'][:5]
    else:
        results['value'] =[{'displayName': 'call-graph-error', 'id': 'call-graph-error'}]
    return render(request, 'auth/call-graph.html', context=dict(results=results))
