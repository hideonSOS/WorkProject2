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
from . import function as MyFunction2 # functionモジュール
def page2(request):

    # target_url = 'https://www.boatrace-suminoe.jp/modules/datafile/?page=index_mrankdtl&dtl=7&select=7'
    # selector1='body > main >div>div>div>table>tbody>tr>td>a'
    # selector2='body > main >div>div>div>table>tbody>tr>td'

    # elems = MyFunction.PickupElementList(MyFunction.DataCroll(target_url,selector2))
    # elemdict = MyFunction2.SelectElems(elems)

    # MotorDict = {
    #     'label':MyFunction.PickupElementList(MyFunction.DataCroll(target_url,selector1)),
    #     'twoave':elemdict['twoave']
    # } 

    
    # return render(request, 'WorkApp2/page2.html',{'MotorDict':MotorDict})
    return render(request, 'WorkApp2/page2.html')


def page3(request):
    target_url = 'https://www.boatrace-suminoe.jp/modules/raceinfo/?page=index_tokutenrank'
    selector = 'body > main > div'
    dict = MyFunction.DataCroll(target_url,selector)
    

    return render(request, 'WorkApp2/page3.html',{'dict':dict})
    # return render(request, 'WorkApp2/page3.html')