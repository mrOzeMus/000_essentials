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