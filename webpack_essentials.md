# Webpack Essentials

Webpack est un bundler très efficace


## Meilleur tuto

    const path = require('path')
    const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
    const dev = true
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    const ManifestPlugin =require('webpack-manifest-plugin')
    const htmlWebpackPlugin = require('html-webpack-plugin')

    let config= {
        entry: {
            app: [ './assets/css/app.scss','./assets/js/app.js']
        },
        watch: dev,
        output: {
            filename: dev ? '[name].js' : '[name].[chunkhash:8].js'
        },
        devtool: dev ? "cheap-module-eval-source-map" : "source-map",
        module:{
            rules:[
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use:['babel-loader']
                },
                {
                    test: /\.css$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ExtractTextPlugin.extract(['style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1, minimize:true } }
                     , 'postcss-loader'])
                },
                {
                    test: /\.scss$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                         use: [
                    { loader: 'css-loader', options: { importLoaders: 1, minimize:true } },
                    'postcss-loader', 'sass-loader']
                      })
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    use:[
                        {
                            loader: 'url-loader',
                            options:{
                                limit: 8192,
                                name: '[name].[ext]'
                            }
                        },
                        {
                            loader: 'img-loader',
                            options: {
                                enabled: !dev
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins:[
            new ExtractTextPlugin({
                filename: dev ? '[name].css' : '[name].[contenthash:8].css'
            }),
            new htmlWebpackPlugin()
        ]
    }

    if(!dev){
        config.plugins.push(new uglifyJsPlugin({
            sourceMap:true
        }))
        config.plugins.push(new ManifestPlugin())
    }

    console.log('In Dev ? ', dev)

    module.exports = config

## 2. Assets

### Loading CSS
Pour charger un fichier CSS plusieurs modules sont nécessaires.

    npm install --save-dev style-loader css-loader

> Ne pas oublier il faut importer le css dans le fichier index.js



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
