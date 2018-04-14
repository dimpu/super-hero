from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
from db import db, SuperHero, HeroLink
import time
import os
import urllib.request 

site_url = 'https://www.superherodb.com'

def get_hero(link):
  try:
    page = get(link, stream=True)
  except:
    with open("debug.txt", "a") as myfile:
      myfile.write(link)
    pass

  soup = BeautifulSoup(page.text, 'html.parser')
  save_hero(link, soup)

def save_hero(link, soup):
  name = soup.select_one('div.titleprofile h1').text.strip()
  real_name = soup.select_one('div.linkunderline tr td:nth-of-type(2)').text.strip()
  city = soup.select_one('div.linkunderline tr td:nth-of-type(8)').text.strip()
  sponser = soup.select_one('div.linkunderline tr td:nth-of-type(12)').text.strip()
  gender = soup.select_one('div.linkunderline tr td:nth-of-type(16)').text.strip()
  race = soup.select_one('div.linkunderline tr td:nth-of-type(18)').text.strip()
  height = soup.select_one('div.linkunderline tr td:nth-of-type(20)').text.strip()
  weight = soup.select_one('div.linkunderline tr td:nth-of-type(22)').text.strip()
  eye_color = soup.select_one('div.linkunderline tr td:nth-of-type(24)').text.strip()
  hair_color = soup.select_one('div.linkunderline tr td:nth-of-type(26)').text.strip()
  occupation = soup.select_one('div.linkunderline tr td:nth-of-type(28)').text.strip()
  picture_name = name.lower().replace(' ','-')
  isUserNotExits = SuperHero.select().where(SuperHero.name == name).count() is 0

  if isUserNotExits:
    save_picture(soup, picture_name)

  power_link = link + '/powers/'
  page = get(power_link)
  soup = BeautifulSoup(page.text, 'html.parser')
  powers = soup.select_one('div.linkunderline .copy').text.strip()
  

  if isUserNotExits:
    SuperHero.create(
      name = name,
      real_name = real_name,
      height = height,
      weight = weight,
      city = city,
      sponser = sponser,
      gender = gender,
      race = race,
      eye_color = eye_color,
      hair_color = hair_color,
      occupation = occupation,
      picture = picture_name,
      powers = powers,
    )

def save_picture(soup, picture_name):
  imgUrl = site_url + soup.select_one('.profileportrait img').get('src').replace('010','100')
  try:
    urllib.request.urlretrieve(imgUrl, 'pictures/'+picture_name+'.jpg')
  except:
    with open("debug.txt", "a") as myfile:
      myfile.write(imgUrl + 'pictures/'+picture_name+'.jpg')
    pass

def main():
  for hero in HeroLink.select():
    print(hero.url)
    get_hero(hero.url)


main()


# def main(link):
#   page = get(link)
#   soup = BeautifulSoup(page.text, 'html.parser')
#   name = soup.select_one('div.titleprofile h1').text.strip()
#   real_name = soup.select_one('div.linkunderline tr td:nth-of-type(2)').text.strip()
#   city = soup.select_one('div.linkunderline tr td:nth-of-type(8)').text.strip()
#   sponser = soup.select_one('div.linkunderline tr td:nth-of-type(12)').text.strip()
#   gender = soup.select_one('div.linkunderline tr td:nth-of-type(16)').text.strip()
#   race = soup.select_one('div.linkunderline tr td:nth-of-type(18)').text.strip()
#   height = soup.select_one('div.linkunderline tr td:nth-of-type(20)').text.strip()
#   weight = soup.select_one('div.linkunderline tr td:nth-of-type(22)').text.strip()
#   eye_color = soup.select_one('div.linkunderline tr td:nth-of-type(24)').text.strip()
#   hair_color = soup.select_one('div.linkunderline tr td:nth-of-type(26)').text.strip()
#   occupation = soup.select_one('div.linkunderline tr td:nth-of-type(28)').text.strip()
#   print(name)
#   print(real_name)
#   print(city)
#   print(sponser)
#   print(gender)
#   print(race)
#   print(height)
#   print(weight)
#   print(eye_color)
#   print(hair_color)
#   print(occupation)
#   save_picture(soup, real_name.lower().replace(' ', '-'))

#   link = link + '/powers/'
#   page = get(link)
#   soup = BeautifulSoup(page.text, 'html.parser')
#   powers = soup.select_one('div.linkunderline .copy').text.strip()
#   print(powers)



# # for link in ['https://www.superherodb.com/bananaman/10-10557/','https://www.superherodb.com/batman/10-10441']:
# #   main(link)

# main('https://www.superherodb.com/batman/10-10441/')