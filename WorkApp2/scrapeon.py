import os 
import re
import pandas as pd
import time
from bs4 import BeautifulSoup
import requests

# os.chdir(r'C:\\Users\\matsuyama\\OneDrive')

chromedriver_path='/home/kaihatsu/lib/python3.8/site-packages/helium/_impl/webdrivers/linux/chromedriver.exe'
test_path = r'C:\\Users\\matsuyama\\OneDrive\\kaihatsu_v2\\WorkProject2\\Lib\\site-packages\\helium\\_impl\\webdrivers\\windows\\chromedriver.exe'

def Scraper(url,tag):
    html = requests.get(url)
    soup = BeautifulSoup(html.content, 'html.parser')
    elems = [i.text for i in soup.find_all(tag)]
    dict={
    'no':[],
    'twoave':[],
    'oneave':[],
    'one':[],
    'two':[],
    'three':[],
    'runcount':[],
    'rapave':[],
    'rapmax':[],
    'nige':[],
    'makuri':[],
    'sashi':[],
    'makurizashi':[],
    'nuki':[],
    'luck':[]
    }

    for i, elem in enumerate(elems):
        if i % 17 == 0:
            dict['no'].append(str(elem)+'号機')
        elif i%17==1 or i==1:
            dict['twoave'].append(elem)
        elif i%17==2 or i==2:
            dict['oneave'].append(elem)
        elif i%17==3 or i==3:
            dict['one'].append(elem)
        elif i%17==4 or i==4:
            dict['two'].append(elem)
        elif i%17==5 or i==5:
            dict['three'].append(elem)
        elif i%17==6 or i==6:
            dict['runcount'].append(elem)
        elif i%17==9 or i==9:
            dict['rapave'].append(elem)
        elif i%17==10 or i==10:
            dict['rapmax'].append(elem)
        elif i%17==11 or i==11:
            dict['nige'].append(elem)
        elif i%17==12 or i==12:
            dict['makuri'].append(elem)
        elif i%17==13 or i==13:
            dict['sashi'].append(elem)
        elif i%17==14 or i==14:
            dict['makurizashi'].append(elem)
        elif i%17==15 or i==15:
            dict['nuki'].append(elem)
        elif i%17==16 or i==16:
            dict['luck'].append(elem)
    return dict


def page3_Scraper(url,tag):
    html = requests.get(url)
    soup = BeautifulSoup(html.content, 'html.parser')
    elems = [i.text for i in soup.find_all(tag)]

    dict={
    'ranking':[],
    'toban':[],
    'name':[],
    'class':[],
    'average':[],
    'point':[],
    'accident':[],
    'runcount':[],
    'result':[],
    'label':[],
    }

    kijun = 9
    for i, elem in enumerate(elems):
        if i % 9 == 0:
            dict['ranking'].append(str(elem)+'位')
        elif i%9==1 or i==1:
            dict['toban'].append(elem)
        elif i%kijun==2 or i==2:
            dict['name'].append(str(elem).replace('　　',' '))
        elif i%kijun==3 or i==3:
            dict['class'].append(elem)
        elif i%kijun==4 or i==4:
            dict['average'].append(elem)
        elif i%kijun==5 or i==5:
            dict['point'].append(elem)
        elif i%kijun==6 or i==6:
            dict['accident'].append(elem)
        elif i%kijun==7 or i==7:
            dict['runcount'].append(elem)
        elif i%kijun==8 or i==8:
            dict['result'].append(elem)
            
    for name, runcount,point in zip(dict['name'],dict['runcount'],dict['point']):
        dict['label'].append(str(runcount)+'走 '+name +' ('+ str(point) + '点)')


    print(dict['label'])
    return dict



def Scraper4(url,tag):
    
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36'}
    html = requests.get(url,headers=headers)
    soup = BeautifulSoup(html.content, 'html.parser')
    haco=[]
    dict={
    'toban':[],
    'name':[],
    'rank':[],
    'age':[],
    'total':[]
    }
    elems = soup.find_all(tag)
    for i in elems[7:-7]:
        haco.append(i.text)
    for i,elem in enumerate(haco):
        if i==1 or i%5==1:
            dict['toban'].append(elem)
        elif i==2 or i%5==2:
            dict['name'].append(re.sub(r'   ',' ', elem))
        elif i==3 or i%5==3:
            dict['rank'].append(re.sub('/','',elem))
        elif i==4 or i%5==4:
            dict['age'].append(re.sub('/','',elem))
    for i in range(len(dict['toban'])):
        dict['total'].append(dict['toban'][i]+' ' + dict['name'][i]+' '+dict['rank'][i]+' '+dict['age'][i])

    return dict