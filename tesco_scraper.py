import ast
import os
import urllib.request
from bs4 import BeautifulSoup as Soup
from selenium import webdriver
import time



driver = webdriver.Safari()
URL = 'https://www.tesco.com/groceries/en-GB/search?query='

script_dir = os.path.dirname(__file__)
file_path = "items.txt"
abs_file_path = os.path.join(script_dir, file_path)


def get_items(file, URL, script_dir):
    Full_URLS = []
    ff = open(file, "r")
    for f in ff:
        it, nits, pgs = f.split('-')
        qq_path = "Tesco_"+it+".txt"
        abs_qq_path = os.path.join(script_dir, qq_path)
        qq = open(abs_qq_path, "w")
        qq.write("***" + it + "***\n")
        for i in range(int(pgs)):
            driver.get(URL+it+"&page="+str(i))
            page = driver.page_source
            soup = Soup(page, 'lxml')
            prices = soup.findAll('span', {'class': 'value'})
            names = soup.findAll('h3', {'class': 'sc-chPdSV gRJrUF'})
            items = []
            for j in range(len(names) - 1):
                qq.write(names[j].find(text=True) + " " + prices[j].find(text=True) + "\n")
                items.append(names[j].find(text=True) + " " + prices[j].find(text=True))
        qq.close()
    ff.close()
    return Full_URLS


get_items(abs_file_path, URL, script_dir)
driver.close()

#get_items_url(Full_URLS)
#download_images(images_url)
#f.close()

