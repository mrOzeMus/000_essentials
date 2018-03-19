# Vue.js Essentials


Vuejs est surtout fait pour les **single Page Applications**.

## Installation

Processus d'installation:

    npm install -g vue-cli
    vue init webpack myapp
    cd myapp
    npm install
    npm run dev
    npm run build

Example ultra basique d'utilisation:

    <div id="app">
      {{msg}}
    </div>

    Var app = new Vue({
      el:'#app',
        data:{
          msg: 'Hello world'
      }
    });


## Basics

### Directives

Reactively applies side effects to the Dom when the value of its expression changes

    <element v-directiveld="[argument:] expression[| filters...]">
    </element>

Examples

    <span>{{msg}}</span>

On peut avoir des conditionals et loops.

    <p v-if="show">This is shown</p>

### Class and style binding

    <div v-bind:class="{active: isActive}"></div>

### Components

Register:

        Vue.component('my-component', {
        Template:'This si my component'
        })

        <div id="app">
          <my-component></my-component>
        </div>

### Plug ins:

  vue-router: official router
  vue-resource: web requests
  vue-async-data: async data loading
  vue-validator: form validation
  vue-devtools: chrome extentsion
  vue-touch: touch gesture using hammer.js


## Marche à suivre

Exemple de fichiers très basique:

Fichier app.vue:

    <template>
      <div  id="app">
        <test msg="Hello"></test>

      </div>
    </template>

    <script>

    import Test from './components/test'
    export default {
      name: 'App',
      components: {
        Test
      }
    }
    </script>

    <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>


component test:

<template>
    <div class="test">
      <input type="text" v-model="title"></br>
        <h1>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Nobody</p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
            <button v-on:click="greet('Hello World')">button</button>
            <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <br>
        <br>
        <label>First Name: </label>
        <input type="text" v-model="user.firstName">
        <label>Last name: </label>
        <input type="text" v-model="user.lastName">
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

    <script>
    export default {
        name: 'test',
        props: {
            msg:{
                type: String,
                default: 'Foobar' //valeur par défaut
            }
        },
        data(){
            return{
                title: 'Hello world',
                user: {
                    firstName: 'John',
                    lastName: 'Doe'
                },
                showName: true,
                items:[
                    {title: 'Item one'},
                    {title: 'Item two'},
                    {title: 'Item three'}
                ]
            }
        },
            methods:{
                greet: function(greeting){
                    alert(greeting);
            },
                pressKey:function(e){
                    console.log(e.target.value)
            },
                enterHit: function(){
                    console.log('gou hit enter')
            }

        },
        computed: {
            fullName: function(){
                return this.user.firstName + ' ' + this.user.lastName
            }
        }
    }
    </script>
    <style scoped>
    </style>
