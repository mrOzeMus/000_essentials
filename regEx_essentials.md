# Regular Expression Essentials


## Python par exemple

```python
import re
myRegex = re.compile('regex pattern')
mo = myRegex.search('haystack string')
print(mo.group())
```

## Syntaxe

```python
phoneRegex= re.compile(
  r'\d\d\d-\d\d\d-\d\d\d\d'
)
mo = phoneRegex.search('phrase dans laquelle on veut chercher')
print(mo.group())
```

Ici \d signifie un digit

Liste des elements regex:

  \d : Digit
  \w : word character
  \s : space character (space, tab, \n)
  \D : non-digit
  \W : non-word
  \S : non-space

  Put characters inside []
  [aeiouAEIOU] Matches vowels
  [^aeiouAEIOU] Matches non-vowels
  [0-9a-zA-Z] Same as \w

  Punctuation = Escape
  [\(\)] Matches ( or )

  \d{3}-\d{3}-\d{4} : cherches numeros de telephone type 425-483-3940

  \d : One digit
  \d? : zero or one digits
  \d* : zero or more digits
  \d+ : one or more digits
  \d{3} : Exactly 3 digits
  \d{3,5} : between 3 and 5 digits
  \d{3,} : 3 or more digits

  ([^aeiou][aeiou])+ : pour matcher des mots japonais (combinaison de consonnes et voyelles)

  Testeur regex : http://regexr.com **tres utile pour apprendre les regex et pour tester les trucs**

  Le pipe | permet de signifier 'OU'
  The . means 'any character except newline'
  .* means 'match whatever'
  avoir tout le contenu entre < > par exemple: <.*?>



