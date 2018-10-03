# WebScrapping Essentials

## Basic Setup

Basiquement, on peut commencer en utilisant les libraries "requests" et "BeautifulSoup".

```py
import requests
from bs4 import BeautifulSoup

url = "https://news.ycombinator.com/"
r = requests.get(url)
# print(r.content)
soup = BeautifulSoup(r.content)
# print ( soup.prettify )

links = soup.find_all("a")

for link in links:
  # print(link.get("class"))
  if link.get("class") == ['storylink'] :
    print(link.text)
```

Pour travailler avec Selenium qui possede semble t'il plein d'avantages, faire:
> Il faut que le web driver gecko (l'executable) soit present dans le dossier. Ou bien changer le chemin du PATH dans le code
```py
driver = webdriver.Firefox(executable_path='geckodriver.exe')
url = "http://www.youtube.com"
driver.get(url)

```
regarder ca https://www.youtube.com/watch?v=dZLyfbSQPXI