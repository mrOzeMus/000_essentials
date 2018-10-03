# automating the boring stuff

> for loop:
Voici l'equivalent d'une for loop (i =0 ; i<= 10, i= i+2)
```py
for i in range(0,10,2):
  print(i)
```

## Imports

librairies utiles:

- random : random.randint(1,10)
- sys : sys.exit() // quitte le programme
- pyperclip : pyperclip.copy('copy on clipboard') pyperclip.paste() // interaction avec le presse papier

## Functions

```py
def hello():
    print('Howdy !')
    print('Howdy !!')
    print('Hello There.')

hello()
```

La fonction print peut prendre un argument qui determine le separateur entre les champs:
```py
print('cat', 'dog', 'prout')
print('cat', 'dog', 'prout', sep='ABC') # catABCdogABCprout
```

## Anticipation d'erreurs

```py
def div42by(divideBy):
  try:
    return 42 / divideBy
  except ZeroDivisioError:
    print('Error: You tried to divide by zero.')

print(div42by(2))
print(div42by(5))
print(div42by(0))
print(div42by(53))
```

```py
print('How many cats your have?')
numCats = input()
try:
  if int(numCats) >= 4:
    print('That is a lot of cats.')
  else:
    print('That is not that many cats')
except ValueError:
  print('You did not enter a number.')
```

## Array

On peut faire quelques operations cools sur les array:
```py
spam[-1] # va donner le dernier element
spam[1:3] # va donner une array avec les elements de 1 a 3
spam[4:] # va donner une array avec tous les elements a partir de 4
del spam[2] # supprime l'elements et decale les elements d'apres pour avoir une vraie suppression
len(spam)
[1,2,3] * 3  # va donner [1,2,3,1,2,3,1,2,3]
list('Hello') # va donner ['H', 'e','l','l', 'o']
'howdy' in ['hello', 'hi', 'howdy', 'heyas'] # True
# ca permet de faire une recherche tres rapide
42 not in ['hello', 'cat', 'dog']
list(range(0,100,2)) # donne une array avec les nombres pairs de 0 a 100

for i in range(len(supplies)):
  print ('Index ' + str(i) + supplies[i])
```

> Multiple assignment

```py
cat = ['fat', 'orange', 'loud']
size, color, disposition = cat
size # 'fat'
color # 'orange'

a = 'AAA'
b = 'BBB'
a,b = b,a
# permet d'inverser des valeurs tres simplement
```

> Recherche dans les arrays

```py
spam = ['hello', 'hi', 'howdy', 'heyas']
spam.index('hello') # 0
spam.append('moose')
spam.insert(1, 'chicken')
spam.remove('bat')
del spam[0]
spam.sort()
spam.sort(reverse=True)
spam.sort(key=str.lower) # permet de trier sans tenir compte des majuscules