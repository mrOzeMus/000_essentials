# Express Essentials

## Very basic example

L'application la plus basique d'express js est définie comme suit:

> Créez un répertoire avec npm init puis créez un fichier server.js.


    const express = require('express')
    const app = express()

    app.get('/', function (req, res) {
    res.send('Hello World!')
    })

    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    })

Exécutez ensuite l'application avec la commande suivante:

    node server.js

Ou pour rafraichissement automatique (a mettre dans les scripts package.json):

    nodemon server.js

## Routage

Exemple très basique:

    let express = require('express');
    let app = express();

    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', function(req, res) {
      res.send('hello world');
    });


## EJS

Pour pouvoir utiliser des templates html avec express on peut utiliser ejs.

    npm install --save ejs

Créer un fichier **index.ejs** dans '/views/pages'. On obtient dans server.js:

    let express = require('express');
    let app = express();
    app.set('view engine', 'ejs');
    app.get('/', (request, response) =>{
        response.render('pages/index.ejs',{test:'Salut'})
    })
    app.listen(8080)

De cette facon dans le fichier ejs on peut afficher la variable 'test' de la facon suivante:

    ...
    <body>

    <h1>Salut les gens</h1>
    <p><%= test %></p>

    </body>
    ...

## Utiliser CSS

Express peut aller chercher le CSS dans un folder nommé 'public'.

>html:

    <link rel="stylesheet" href="/semantic/semantic.min.css">

>server.js:

    app.use(express.static('public'))


## Setting views

On peut utiliser ejs ou pug.

    app.set('view engine', 'pug')
    app.set('views', './')  => donne le répertoire a utiliser pour les views
    ...
    app.get('/', (req, res)=>{
    res.render('pugfile')
    })

**Note:** Pour servir html pas besoin de view engine, par contre faire:

    app.use(express.static(__dirname + '/'))


la syntaxe pug est particulière. Voici un example:

    doctype html
    html
       head
          title = "Hello Pug"
       body
          p.greetings#people Hello World!

Note: Pour rentrer du texte plus long il faut faire comme ca:

    div.
       But that gets tedious if you have a lot of text.
       You can use "." at the end of tag to denote block of text.
       To put tags inside this block, simply enter tag in a new line and
       indent it accordingly.


On peut également passer des values dans un objet comme en ejs. On l'intègre de cette facon:

    html
       head
          title=name
       body
          h1=name
          a(href = url) URL


ou bien faire des conditionals:

    html
       head
          title Simple template
       body
          if(user)
             h1 Hi, #{user.name}
          else
             a(href = "/sign_up") Sign Up

OK, voir la doc si besoin.

Mais le language semble assez logique

## Découpage en templates ejs

exemple de découpage ejs avec l'architecture suivante:

    --views--pages--|-footer.EJS
                    |-header.EJS
                    |-index.EJS

>header.ejs

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    <link rel="stylesheet" href="/semantic/semantic.min.css">

    </head>
    <body>
        <div class="ui fixed inverted emnu">
            <a href="/" class="header item">Acceuil</a>
        </div>
        <h1>Salut les gens</h1>
        <p><%= test %></p>


>index.ejs


    <% include header %>

    <div class="container">
    <form action="/" method="post" class="ui form">
    <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>
    </div>
    <button type="submit" class="ui blue labeled submit icon button">
        <i class="icon edit">Envoyer</i>
    </button>
    </form>
    </div>

    <% include footer %>

>footer.ejs

    </body>
    </html>


## Servir fichiers statiques:

Désactivé par défaut il ne faut pas l'oublier si on en a besoin.

    app.use(express.static('public')) => sert un dossier 'public' a la racine
    app.use(express.static('images'))

On peut déclarer plusieurs dossiers.

## Traiter les requêtes de formulaire:

Pour traiter les request il faut installer body-parser.

    npm install --save body-parser

puis dans server js mettre le require('body-parser') et utiliser les 2 méthodes use suivantes:

    let express= require('express');
    let bodyParser= require('body-parser')
    let app = express()
    ...
    //Middleware
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    ...

puis intégrer la détection de la request elle-même:

    app.post('/', (request,response)=>{
    console.log(request.body)
    })



## Requete de formulaire

C'est un peu foireux des fois, voici un example:

    // for parsing application/json
    app.use(bodyParser.json());

    // for parsing application/xwww-
    app.use(bodyParser.urlencoded({ extended: true }));
    //form-urlencoded

    app.post('/', (req,res)=>{
    console.log(req.body)
    res.send('index')
    })


Et dans le html:
**Ne pas oublier le champ name**

    <form action="/" method="POST" enctype="application/x-www-form-urlencoded">
    <input type="text" name="text">
    <button type="submit">submit</button>
    </form>


## Créer une session utilisateus

A utiliser avec express-session
**Se renseigner ca a l'air utile **


## Cookies

Il y a des méthodes particulières pour les cookies. Se renseigner



## Requete Fetch

Ok tout n'est pas clair dans cette méthode, mais au besoin voici une fonction qui retourne les résultat de la requête:

    let fetch = require('node-fetch')

    function callUrl(url){
      return fetch(url)
      .then((res)=>{
              return res.json()
      })
      .then(data => console.log(data)
      )
      .catch((err)=> console.log(err)
      )
    }

    let arr = callUrl('https://jsonplaceholder.typicode.com/users')
