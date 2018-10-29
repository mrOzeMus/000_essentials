# Selenium

Utilise pour le web scrapping

```py
from selenium import webdriver
browser = webdriver.Chrome()
browser.get('https://automatetheboringstuff.com')

elem= browser.find_element_by_css_selector('.entry-content > ol:nth-child(15) > li:nth-child(1) > a:nth-child(1)') # on peut faire plus simple

elem.text # lire un element
elem.click()
browser.quit()
```

Pour obtenir un lien precis sur une page, faire un click droit dans l'inspecteur de page, selectionner l'element et faire "Copier chemin Css"
va donner :
    
    h1.title > yt-formatted-string:nth-child(1)

**Ce chemin est uilisable par selenium en faisant:**
```py
browser.find_element_by_css_selector('body > ... > a')
```

Tout ca marche finalement mieux avec Chrome qu'avec Firefox apparement.

D'autres methodes sont:
> click()
> send_keys()
> submit()

> browser.back()
> browser.refresh()
> browser.forward()

> elem.text : recupere le text dans element
> elem.get_attribute('href')

```py

```