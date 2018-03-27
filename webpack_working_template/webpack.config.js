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