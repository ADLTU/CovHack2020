import ast
import os
import urllib.request
from bs4 import BeautifulSoup as Soup
from selenium import webdriver


driver = webdriver.Safari()
URL = 'https://www.tesco.com/groceries/en-GB/search?query='
file_path = 'items.txt'


def get_items(file_path, URL):
    Full_URLS = []
    ff = open("file_path", "r")
    for f in ff:
        it, nits, pgs = f.split('-')
        for i in range(pgs)
            Full_URLS.append(URL+it+"&page="+i)
    return Full_URLS

def get_items_url(URL):

    driver.get(URL)
    a = input("press enter")
    page = driver.page_source

    soup = Soup(page, 'lxml')
    prices = soup.findAll('span', {'class':'value'})
    names = soup.findAll('h3', {'class':'sc-chPdSV gRJrUF'})
    items = []

    for i in range(len(names)-1):
        print(names[i].find(text=True) + " " + prices[i].find(text=True))
        items.append(names[i].find(text=True) + " " + prices[i].find(text=True))


Full_URLS = get_items(file_path, URL)
get_items_url(Full_URLS)
driver.close()
#download_images(images_url)
#f.close()

