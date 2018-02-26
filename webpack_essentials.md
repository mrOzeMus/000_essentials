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
      entry: './src/index.js',
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


### Loading Images

On va utiliser file-loader pour cela

    npm install --save-dev file-loader

C'est a étudier, l'utilisation d'un loader permet d'optimiser l'affichage des images. Regarder la doc au besoin pour plus de détails.
