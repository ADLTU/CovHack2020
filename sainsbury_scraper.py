import ast
import os
import urllib.request
from bs4 import BeautifulSoup as Soup
from selenium import webdriver
import time



driver = webdriver.Safari()
URL = 'https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/SearchDisplayView?catalogId=10241&storeId=10151&langId=44&krypto=Tl7MKIQl4xIwcRfqc3PThFeQXq8Ra74BHdimtIqV%2FEOXn4Fm4LcbN23VeNnphTI3wh4HU%2B1uKluHqJrCHzh0Aq%2BxmMmqZJWMQwuXS4o3wsD1Nfq51RF0r93ng8hhCv0iEDcddHNCmgYHhj%2FEu3kweIQpYV4nvIW7PfJas7qub82UydO0A9FY1%2Byg4az%2F%2BeDLB8Lo3b5jXR%2FEZGxxuCMHLA%3D%3D#langId=44&storeId=10151&catalogId=10241&categoryId=&parent_category_rn=&top_category=&pageSize=60&orderBy=RELEVANCE&searchTerm=turkey&beginIndex=0&hideFilters=true&categoryFacetId1='


def get_items_url():

    driver.get(URL)
    a = input("press enter")
    page = driver.page_source

    soup = Soup(page, 'lxml')
    # names = soup.select('div.productInfo  div  h3 a' ).text
    divs = soup.find_all("div", {"class": "productNameAndPromotions"})
    for div in divs:
        links = div.select('h3 a')
        for link in links:
            print(link.text)
            name = link
    prices  = soup.find_all('p', {'class':'pricePerUnit'})
    items = []

    # print(names)
    # print(prices)

    items.append({
        "name": name,
        "price": prices.find(text=True)
    })

    print(items)
    

    # for j in range(len(names) - 1):
    #     print(names[j].find(text=True) + " " + prices[j].find(text=True) + "\n")
    #     items.append(names[j].find(text=True) + " " + prices[j].find(text=True))



get_items_url()
driver.close()

#get_items_url(Full_URLS)
#download_images(images_url)
#f.close()

