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



from . import scrapeon as MyFunction  # scrapeonモジュール 
def page1(request):
    dict={'one':[],'two':[]}
    target_url ='http://www.boatrace-db.net/stadium/mdetail/pid/12/mno/11/'

    if request.method=='POST':
        mno = request.POST.get('input1')
        target_url = 'http://www.boatrace-db.net/stadium/mdetail/pid/12/mno/'+str(mno)+'/'
        target_tag = 'p'
        target_url2 = 'https://www.boatrace-suminoe.jp/modules/datafile/?page=index_mrankdtl&dtl=9&select=9'
        # 艇国データ
        dict['one'] = MyFunction.Scraper4(target_url,target_tag)
        # 住之江公式
        dict['two'] = MyFunction.Scraper(target_url2,'td')
        dict['three']=mno
        
    else:


        target_tag = 'a'
        dict = MyFunction.Scraper4(target_url,target_tag)

    return render(request, 'WorkApp2/page1.html',{'dict':dict})


def page2(request):

    target_url = 'https://www.boatrace-suminoe.jp/modules/datafile/?page=index_mrankdtl&dtl=7&select=8'
    
    MotorDict=MyFunction.Scraper(target_url,'td')
    
    return render(request, 'WorkApp2/page2.html',{'MotorDict':MotorDict})
    # return render(request, 'WorkApp2/page2.html')


def page3(request):
    target_url = 'http://www.boatrace-db.net/stadium/boat/pid/12/'
    selector = 'td'
    RankDict = MyFunction.page3_Scraper(target_url,selector)
    return render(request, 'WorkApp2/page3.html',{'RankDict':RankDict})
    # return render(request, 'WorkApp2/page3.html')

def page4(request):
    return render(request, 'WorkApp2/page4.html')

def page5(request):
    return render(request, 'WorkApp2/page5.html')

def page6(request):
    target_url = 'http://www.boatrace-db.net/stadium/boat/pid/12/'
    selector = 'td'
    BoatDict=MyFunction.Scraper5(target_url,selector)
    
    
    return render(request, 'WorkApp2/page6.html',{'BoatDict':BoatDict})

def page7(request):
    return render(request, 'WorkApp2/page7.html')

def page8(request):
    return render(request, 'WorkApp2/page8.html')