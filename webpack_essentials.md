# Webpack Essentials

Webpack est un bundler très efficace

## 1. Basic Setup

Structure du projet:

    my-project-folder
    |- package.json
    |- webpack.config.js
    |- /dist
      |- index.html
    |- /src
      |- index.js

in **package.json** :

    {
      ...
      "scripts":{
        "build": "webpack",
        "watch": "webpack --watch"        
      },
      ...
    }

Example of config file:

    const path = require('path');

    module.exports= {
      mode: 'development', //ou production, permet de minifier ou non le bundle.js
      entry: './src/index.js',
      watch: true,  //permet directement de mettre le watch ici
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      module:{
        rules:[
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          }
        ]
      }
    };



## 2. Assets

### Loading CSS
Pour charger un fichier CSS plusieurs modules sont nécessaires.

    npm install --save-dev style-loader css-loader

> Ne pas oublier il faut importer le css dans le fichier index.js


    import _ from 'lodash';
    import './style.css';

#### Pour le SASS:

Il faut rajouter un loader sass de la manière suivante:

    npm install --save node-sass sass-loader

et rajouter les règles de test pour webpack:


    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }

Pour finir bien sur, importer le scss dans le fichier js:

    import scss from '../scss/style.scss'

>Se renseigner pour utiliser autoprefixer en supplément pour résoudre problèmes de compatibilité. C'est quasi obligatoire aujourd'hui.

>attention pour le chargement d'url d'images en css ca pose probleme, voir tuto grafikart pour la solution.
(https://www.youtube.com/watch?v=eJ9_qZUd99w)

### Loading Images

On va utiliser file-loader pour cela

    npm install --save-dev file-loader

C'est a étudier, l'utilisation d'un loader permet d'optimiser l'affichage des images. Regarder la doc au besoin pour plus de détails.


### Babel-loader

Babel permet de compiler le code js pour les anciens navigateurs et utiliser les nouvelles fonctionnalités js Es5, Es6, etc sans se poser trop de questions.

>Aller voir le github de babel-loader de webpack pour plus d'infos.

Marche à suivre:

    npm install babel-loader babel-core babel-preset-env webpack

puis dans webpack.config.js:

    module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
          }
        }
      ]
    }


Recommandé également, **créer à la racine un fichier de config babel .babelrc **:

    {
    "presets": [
      ["env", {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"]
        }
      }]
    ]
    }

>aller vois sur le site de babel à propos des plugins 'env' pour différents réglages pour la compatibilité vers anciens browsers.
(https://babeljs.io/docs/plugins/preset-env/)
