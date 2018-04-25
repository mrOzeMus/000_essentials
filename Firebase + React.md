# Ajouter Firebase à un projet React


Permet d'intégrer la base de données en ligne.


## Get Started:


* Créer nouveau projet sur Firebase

Installation : 
    
    npm i re-base

Créer un fichier base.js à la source du projet:

    import Rebase from 're-base'
    import firebase from 'firebase'

    var config = {
    apiKey: "AIzaSyC93isSKOmIWCq5AZ7tT54BiCOX5pSuhcQ",
    authDomain: "todo-list-222d3.firebaseapp.com",
    databaseURL: "https://todo-list-222d3.firebaseio.com",
    projectId: "todo-list-222d3",
    storageBucket: "",
    messagingSenderId: "490417760165"
      }

    const app= firebase.initializeApp(config);
    const base= Rebase.createClass(app.database())

    expost { base }

Si on veut pouvoir changer les clés selon que l'on soit en prod ou en dev on peut utiliser les variables d'environnment. Se renseigner ensuite pour l'utilisation et le déploiement en production.

Pour cela, créer un fichier .env a la racine:

    REACT_APP_FIREBASE_KEY= 
    REACT_APP_FIREBASE_DOMAIN=
    REACT_APP_FIREBASE_DATABASE=
    REACT_APP_FIREBASE_PROJECT_ID=
    REACT_APP_FIREBASE_STORAGE_BUCKET=
    REACT_APP_FIREBASE_SENDER_ID=

** attention enlever les virgules et les quotes (sauf quand c'est vide) **

le fichier base devient alors:

    ...
    const config= {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
    }
    ...


Importer ensuite base.js dans App.js.
Et dans le fichier App.js:


    componentWillMount(){
        this.songsRef = base.syncState('songs', {
            context: this, 
            state: 'songs'
        })
    }

    componentWillUnmount(){
        //Pour libérer la connexion 
        base.removeBinding(this.songsRef)
    }


## Création en dur dans firebase

Exemple de bdd (song creator)

chord-creator -- null
    Name: songs
        Name: 1
            Name: chordPro - Value: 'this is a progression'


## Ajouter Une entrée dans firebase via l'app

Dans app.js:

    constructor(props){
        super(props)
        this.addSong = this.addSong.bind(this)
        this.state={
            songs: {
                
            }
        }
    }



    addSong(title){
        const songs = { ...this.state.songs}
        const id = Date.now()   // Génération d'un id unique
        songs[id]= {
            id: id,
            title: title,
            text: ''
         }

        this.setState({songs})
    }
