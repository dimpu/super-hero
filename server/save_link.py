from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
from db import db, HeroLink

site_url = 'https://www.superherodb.com'


def save_all_links():
  page = get(site_url + '/characters/')
  soup = BeautifulSoup(page.text, 'html.parser')
  characters = soup.find_all('li', attrs={'class':'char-li'} )
  for character in characters:
    HeroLink.create(
      name = character.text,
      url = site_url + character.find('a').get('href')
    )

def main():
  save_all_links()

main()