from helium import *
from selenium.webdriver import ChromeOptions
import chromedriver_binary
import os 
import re
import pandas as pd


# os.chdir(r'C:\\Users\\matsuyama\\OneDrive')

chromedriver_path='/usr/bin/chromedriver.exe'
test_path = r'C:\\Users\\matsuyama\\OneDrive\\kaihatsu_v2\\WorkProject2\\Lib\\site-packages\\helium\\_impl\\webdrivers\\windows\\chromedriver.exe'

def pick(str):
     start = re.compile('>')
     str1 = start.split(str)[1]
     end = re.compile('<')
     str2 = end.split(str1)[0]
     return str2

def PickUpData(selector):
	a_elm = find_all(S(selector))
	return a_elm

dict = {}

def TestCroll(url,selectoron):
	options=ChromeOptions()
	options.add_argument('--disable-gpu')
	options.add_argument('--headless')
	options.add_argument('--no-sandbox')
	try:
		start_chrome(url, chromedriver_path, options=options)
		testlist =[]
		elem = PickUpData(selectoron)
		dict = {
		'No':[],
		'toban':[],
		'name':[],
		'rank':[],
		'average':[],
		'point':[],
		'accident':[],
		'totalrun':[],
		'result':[],
		}
		for i, a in enumerate(elem):
			# print(str(a))/
			if 'col1' in str(a):
				dict['No'].append(pick(str(a)))
			elif 'col2' in str(a):
				dict['toban'].append(pick(str(a)))
			elif 'col3' in str(a):
				dict['name'].append(pick(str(a)))
			elif 'col4' in str(a):
				dict['rank'].append(pick(str(a)))
			elif 'col5' in str(a):
				dict['average'].append(pick(str(a)))
			elif 'col6' in str(a):
				dict['point'].append(pick(str(a)))
			elif 'col7' in str(a):
				dict['accident'].append(pick(str(a)))
			elif 'col8' in str(a):
				dict['totalrun'].append(pick(str(a)))
			elif 'col9' in str(a):
				dict['result'].append(pick(str(a)))	
			else:
				print(f' error >>> {str(a)}')

		df = pd.DataFrame()
		df['No']=dict['No']
		df['toban']=dict['toban']
		df['name']=dict['name']
		df['rank']=dict['rank']
		df['average']=dict['average']
		df['point']=dict['point']
		df['accident']=dict['accident']
		df['totalrun']=dict['totalrun']
		df['result']=dict['result']
		
		kill_browser()
	except():
		kill_browser()
		print('接続エラー')
	return df
	
# testelem = TestCroll(url3,selector_str)






