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




from . import scrapeon as MyFunction  # scrapeonモジュール 

def page2(request):

    target_url = 'https://www.boatrace-suminoe.jp/modules/datafile/?page=index_mrankdtl&dtl=7&select=7'
    
    MotorDict=MyFunction.Scraper(target_url,'td')
    
    return render(request, 'WorkApp2/page2.html',{'MotorDict':MotorDict})
    # return render(request, 'WorkApp2/page2.html')


def page3(request):
    target_url = 'https://www.boatrace-suminoe.jp/modules/raceinfo/?page=index_tokutenrank'
    selector = 'td'
    RankDict = MyFunction.page3_Scraper(target_url,selector)
    return render(request, 'WorkApp2/page3.html',{'RankDict':RankDict})
    # return render(request, 'WorkApp2/page3.html')

def page4(request):
    return render(request, 'WorkApp2/page4.html')

def page5(request):
    return render(request, 'WorkApp2/page5.html')