import ast
import os
import urllib.request
from bs4 import BeautifulSoup as Soup
from selenium import webdriver


driver = webdriver.Safari()
URL = 'https://www.tesco.com/groceries/en-GB/search?query=*&page=1'
#Save_to = "/Applications/YOLOv3/Gun_Images"
#f = open("images.txt","a")


def get_items_url():

    driver.get(URL)
    # a = input("press enter")
    page = driver.page_source

    soup = Soup(page, 'lxml')
    prices = soup.findAll('span', {'class':'value'})
    names = soup.findAll('h3', {'class':'sc-chPdSV gRJrUF'})
    items = []

    for i in range(len(names)-1):
        print(names[i].find(text=True) + " " + prices[i].find(text=True))
        items.append(names[i].find(text=True) + " " + prices[i].find(text=True))



get_items_url()
driver.close()
#download_images(images_url)
#f.close()

