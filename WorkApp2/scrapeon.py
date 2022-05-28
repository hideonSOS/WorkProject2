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
    'rapave':[],
    'rapmax':[],
    'nige':[],
    'makuri':[],
    'sashi':[],
    'makurizashi':[],
    }

    for i, elem in enumerate(elems):
        if i % 17 == 0:
            dict['no'].append(str(elem)+'号機')
        elif i%17==1 or i==1:
            dict['twoave'].append(elem)
        elif i%17==2 or i==2:
            dict['oneave'].append(elem)
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
            
    return dict





	





