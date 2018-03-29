# CSS Tricks




## Astuces en vrac:

* background-attachment: fixed (pour fond imagés fixe)
* background-image: linear-gradient(top, #123456, #123123)
* font-family: 'Lobster', cursive  (assez commun)



## Astuces:

> Pour une bannière avec plusieurs photos, pour aligner les images, utiliser:

     img { width: 200px; height: 200px; object-fit: cover; }

voir donc les propriétés object fit et object-position


> exemple pas mal visuellement avec des flexbox:

    
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    
    .container > div > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .container > div{
        flex: 1 1 150px;
    }

(voir https://www.youtube.com/watch?v=-Wlt8NRtOpo à 48:42)

> Body

Il est commun de mettre margin:0 et padding:0 dans body pour partir sur une bonne base.
De même ne pas hésiter à mettre:

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }



## CSS interview questions

> Explication box Model

propriété box-sizing: par défaut content-box
content > padding > border > margin

border-box: plus petit. La border arrive à l'intérieur de la boite.

> Specificity (priorité lors de multiples déclarations)

la règle appliquée est la dernière déclaration. Sauf si l'une des déclaration est plus spécifique. Ce sera celle la qui prendra le dessus.

> Comment aligner une div dans une autre en CSS sans flex

    .out{
        width: 400px;
        height: 400px;
        position: relative;
    }

    .in{
        width: 100px;
        height:100px;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
    }

> Difference entre Static, relative, absolute, fixed

    On peut déplacer une div avec position: relative sans perturber l'environnement avec top ou bottom, etc...

> Différence entre visibility: hidden et display: none

> Qu'est ce que le Shadow Dom

    A étudier c'est pour les éléments qui ont besoin de leur propre css

> Construire un triangle en pure css

    .tri{
        height: 100px;
        width: 100px;
        background-color: red;
        border-top: 100px solid blue;
        border-bottom: 100px solid green;
        border-left: 100px solid white;
        border-right: 100px solid yellow;
    }
    Il suffit alors de cacher des border en les rendant transparent.

> sudo elements

    p::after{
        content: "I am injected to a P tag"
    }

    p: définit une sudo class
    p:: définit un sudo élément

> A quoi servent les data-attributes

    la syntaxe est <div class"profile" data-name="techsith" data-youtube-name="techsithtube" data-id="1">Profile</div>

    On peut alors accéder aux data attributest dans le css

    .profile:hover::before{
        display: inline-block;
        content: attr(data-name);
    }

> Différences entre NormalizeCss et ResetCss

    Reset Css enlève tous les styles avec *{}. A utiliser lorsqu'on veut vraiment tout décorer par nous même. Normalize Css tente de rendre le rendu le plus uniforme possible sur tous les navigateurs.

> Savoir ce que sont les sprites.

    Permet de diffuser plusieurs images en une seule pour moins de requêtes et plus de rapidité.

> Nouveautés de html 5

> Quels tags sont utilisés pour faire un tableau