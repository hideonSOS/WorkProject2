from django.shortcuts import render
from django.contrib.auth.views import LoginView, LogoutView
from . import Motor

from WorkApp2.forms import LoginForm
# Create your views here.

# @login_required
def home(request):
    return render(request,'WorkApp2/home.html')

class Login(LoginView):
    form_class = LoginForm
    template_name='WorkApp2/login.html'

class Logout(LogoutView):
    template_name='WorkApp2/logout.html'

def page1(request):
    dict = Motor.return_dict()
    return render(request, 'WorkApp2/page1.html',{'dict':dict})


def page2(request):
    return render(request, 'WorkApp2/page2.html')

from .scrapeon import TestCroll
def page3(request):

    url = 'https://www.boatrace-suminoe.jp/modules/raceinfo/?page=index_tokutenrank'
    selector_str = 'body > main > div.l-mainWrap > div > div > ul > li > table > tbody > tr > td'
    # df = TestCroll(url,selector_str)
    TestCroll(url,selector_str)
    # dict = df.to_dict('records')
    # return render(request, 'WorkApp2/page3.html',{'dict':dict})
    return render(request, 'WorkApp2/page3.html')