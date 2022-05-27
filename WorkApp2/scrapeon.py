from helium import *
from selenium.webdriver import ChromeOptions
import chromedriver_binary
import os 
import re
import pandas as pd
import time


# os.chdir(r'C:\\Users\\matsuyama\\OneDrive')

chromedriver_path='/home/kaihatsu/lib/python3.8/site-packages/helium/_impl/webdrivers/linux/chromedriver.exe'
test_path = r'C:\\Users\\matsuyama\\OneDrive\\kaihatsu_v2\\WorkProject2\\Lib\\site-packages\\helium\\_impl\\webdrivers\\windows\\chromedriver.exe'

def PickupElementLists(stron):
	start = re.compile('>')
	# stra = [start.split(i)[1] for i in stron]
	print(stron)
	print(len(stron))
	end = re.compile('<')
	# str2 = [end.split(i)[0] for i in stra]
	# return str2

def PickupElementList(stron):
	start = re.compile('>')
	stra = [start.split(i)[1] for i in stron]
	end = re.compile('<')
	str2 = [end.split(i)[0] for i in stra]
	return str2


def PickUpData(selector):
	a_elm = find_all(S(selector))
	return a_elm

def DataCroll(url,selectoron):
	options=ChromeOptions()
	# options.add_argument('--disable-gpu')
	options.add_argument('--headless')
	options.add_argument('--no-sandbox')
	options.add_argument("--disable-dev-shm-usage")
	try:
		start_chrome(url, chromedriver_path, options=options)
		elem = PickUpData(selectoron)
		capsel = [str(i) for i in elem]
		
		kill_browser()
		print('success')
	except:
		kill_browser()
		print('接続エラー')
	return capsel
	





