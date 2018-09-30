# Python essentials


## Basics

Prérequis.
installer python3.
installer éclipse.

## Comment:

Pour commenter une ligne : #.
Pour commenter plusieurs lignes: ''' ou """.
Mais il faut être consistent.

    print("this is a message")

Exemples print:

    print('Hello'[3]) //renvoi 'l'
    print('Hello'[0:3])
    print(1,2,3,'Hello') // renvoi '1 2 3 Hello'
    print('Line1\nLine2\Line3') // renvoi la réponse sur 3 lignes différentes.

## Scripting

Dans linux on peut si on veut utiliser idle qui est un environnement tout fait pour runner python.

    operations mathematiques:
    - exponent : 3 ** 4
    - quotient division : 22 // 8

## Variables and Data types

Pas besoin de let ou de var pour déclarer une variable.

    greeting = 'Hello World'

    myStr = 'Hello'
    myInt = 25
    myFloat = 1.3
    
    myList = [1,2,3,'Hello']
    myDict = {'a':1, 'b':2', 'c':3}

Les objets en Python sont appelés Dictionnary.

    print(type(myStr), myStr) // renvoi '<class 'str'> Hello
    print(myList[3]) // renvoi 'Hello'
    print(myDict['a']) // renvoi '1'

Concaténation:

    greeting =mystr + 'world'


## Conditionals

* Basique condition if:

    x = 4
    if x < 6:
        print('This is true')



** L'indentation est très importante, c'est elle qui dit la fin du if. **

* Basique condition if else:

         if x < 6:
            print('This is true')
        else:
            print('This is false')

* Basique condition Elif

        color = 'red'

        if  color == 'red':
            print('Color is red')
        elif color == 'blue'
            print('Color is blue')
        else:
            print('Color is not red or blue')

* Boucles l'une dans l'autre

        if color == 'red'
            if x< 10:
                print('Color si red x is less than 10)

Mais il est mieux de faire avec des opérateurs logiques:

        if color == 'red' and x < 10:
            print('color is red and x is less than 10)

* Loops basiques:

        people = ['John', 'Sara','Tim', 'Bob']
        for person in people:
            print('Current Person: ', person)

    Ou bien:

        for i in range(len(pople)):
            print('Current Person: ', person)

    Ou bien:

        for i in range(0,10):
            print(i)

* While basique:

        count = 0
        while count < 10
            print('Count: ', count)
            if count == 5:
                break
            count = count + 1

## Fonctions

Ici aussi l'indentation est **très** importante

    def sayHello(name='John'):
        print('Hello', name)

    sayHello('John')

Ici on a définit une valeur par défaut dans la fonction si elle est appelée sans argument.

> Retourner une valeur:

    def getSum(num1,num2):
        total = num1 + num2
        return total
    numSum = getSum(1,2)
    print(numSum)

> Mutabilité

    def addOneToNum(num):
        num = num + 1
        print('Value inside function: ',num)
        return

    num = 5
    addOneToNum(num)
    print('Value outside function: ', num)

retourneras: Value inside function : 6, Value outside functionn : 5

    def addOneToList(myList):
        myList.append(4)
        print('Value inside function: ', myList)
        return

    myList =[1,2,3]
    addOneToList(myList)
    print('Valuue outside function: ', myList)

retourneras cette fois les memes valeurs.


## String Functions

    myStr = 'Hello world'

    print(myStr.capitalize())
    print(myStr.swapcase())
    print(len(myStr)) // donne la longueur de la string
    print(myStr.replace('World', 'Everyone'))
    sub="l"
    print(myStr.count(sub)) // compte le nombre de fois qu'apparait le parametre dans la string
    print(myStr.startsWith('Hello')) // renvoi vrai ou faux
    print(myStr.endsWith('World'))
    print(myStr.split()) // split dans une liste tous les mots
    print(myStr.find('e'))  // donne l'index du caractère donné en paramètre. Donne -1 si pas trouvé
    print(mySter.index('x'))  // idem mais renvoi une erreur si pas trouvé.
    print(myStr.isalnum()) // 'is alpha numeric'
    print(myStr.isalpha()) // 'is alphabetic'
    print(myStr.isnum()) // 'is numeric'


## Interaction avec autres fichiers

Dans un fichier on a :

    def sayHello(name):
        print('Hello', name, 'From the greet module')
        return

    def sayGoodBye(name):
        print('GoodBye ', name)
        return

Dans l'autre fichier:

    import greet
    greet.sayHello('Tim')

    from greet import sayGoodBye
    sayGoodBye('Tom')

On peut soit tout importer, soit importer une méthode spécifique.


## File System

>Ouvrir un fichier

On peut ouvrir un fichier text par exemple:

    fo = open('test.txt', 'w') // w ='write'
    print('Name: ', fo.name) //donne le nom du fichier
    print(fo.closed) // dis si le fichier est ouvert dans le script
    print(fo.mode)  // dis si le fichier est en écriture

Ecrire dans un fichier:

    fo.write('I love Python')
    fo.write('and Javascript')
    fo.close()

Si on veut réécrire ensuite sur le meme fichier sans effacer:

    fo = open('test.txt', 'a') // a='append'
    fo.write(...)
    fo.close()

Ouvrir en lecture:

    fo = open('test.txt', 'r+')
    text=fo.read(10)
    print(text)
    fo.close()

Créer un fichier

    fo = open('test2.txt', 'w+')
    fo.write('this is my new file')
    fo.close()


## Classes

Python est pas mal pour programmation orientée objets. Similaire a Java.

dans les classes, le __ veut dire 'private'. Ces valeurs ne peuvent êtres changées depuis l'extérieur de la classe.

    class Person:
        __name = ''
        __email = ''

        def __init__(self, name, email):
            self.__name = name
            self.__email = email

        def set_name(self, name):
            self.__name = name

        def get_name(self):
            return self.__name:

        def set_email(self, email):
            self.__email = email

        def get_email(self):
            return self.__email

        def toString(self):
            return '{} can be contacted at {}'.format(self.__name, self.__email)

    brad = Person('Brad Traversy', 'brad@gmail.com')


    print(brad.get_email())
    print(brad.toString())

On peut hériter d'une autre classe.

    class Customer(Person):
        __balance = 0

        def __init__(self, name, email, balance):
            self.__name = name
            self.__email = email
            self.__balance = balance
            super(Customer, self).__init__(name, email)

        def set_balance(self, balance):
            self.__balance = balance

        def get_balance(self):
            return self.__balance

        def toString(self):
            return '{} has a balance of {} and can be contected at {}'.format(self.__name, self.__balance, self.__email)

    
    john = Customer('John Doe','jdoe@gmail.com', 100)
    john.set_balance(400)
    print(john.toString())

    kate = Customer('Kate Smith', 'ksmith@yahoo.com', 5000)
    print(kate.toString(200))

//super permet d'hériter la classe
