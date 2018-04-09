# ES6 Essentials

## Promises


Exemple de promesse avec Fetch:

>exemple avec un fichier json

    const pokedexPromise = fetch('http://www.quelquechose.com/pokedex.json');
    const pokedex= [];

    pokedexPromise
      .then(data => data.json())
      .then(data => {
      console.log(data)
      })
      .then(data => pokedex.push(...data))

Créer une promesse:

    const x = 100
    const promise = new Promise((resolve, reject) =>{
      setTimeout(()=>{
      if(x>50){
          resolve(console.log('OK'))
          } else{
          reject(console.log('rejected'))
          }
      }, 3000)
      })

      promise.then(data => console.log(data));

## Async

Permet de dire d'attendre avant de faire la suite. Pour cela , rajouter **async** dans la déclaration de la fonction.

    const pokedexPromise = fetch('https://www.eee.com/pokedex.json')

    async function affichage(){
      const res = await pokedexPromise
      const json = await res.json()
      const pokedex = await [...json.pokemon]
      pokedex.map(pokemon => console.log(pokemon.name))
    }

    affichage()


> le await permet d'oubliger a attendre


### Try et catch

Catch permet de récupérer les erreurs pendant le try.

    async function affichage({
      try{
        const res = await pokedexPromise
        const json = await res.json()

        const pokedex =await [...json.pokemon]
        pokedex.map(pokemon => {
          console.log(pokemon.name)
          })4
      } catch(errors){
        console.log(errors)
      }
    })

    affichage()



## map()

Crée une nouvelle array !!

    let vals = [4,8,1,2,9]
    vals = vals.map(x => x * 2)

La fonction double chaque numéro.

## fill()

fill ne crée **pas** une nouvelle array.

    let vals= Array(100).fill().map(Math.random);

Création d'une nouvelle array de nombres aléatoires.


## reduce()

Crée une nouvelle array !!

Réduce sert a "réduire" l'ensemble de l'array a une seule 'valeur'.

calcule la somme de l'array:

    let vals =[5,4,1,2,9]
    vals.reduce((acc, val) => acc + val);

Trouver le maximum:

    let biggest = vals.reduce((a, b) => a>b ?  a : b );


## filter()

filter crée une nouvelle array.

Garder que les nombres pairs:

      let vals = [5,4,9,2,1];
      vals= vals.filter((x)=> x % 2 == 0);


## sort()

sort ne crée **pas** une nouvelle array.
Permet de 'trier' les valeurs.

Tri simple:

    let vals = ['a','hello', 'B', 'goodbye'];
    vals.sort();
    console.log(vals)

Mais on peut également trier selon une fonction.

Tri les mots par leur longueur.


    vals.sort((a,b) => a.length - b.length)
    console.log(vals)



# JavaScript questions


> Différences entre let et var

let est dédié au block.
var est dédié à la fonction.

> Différence entre == et ===

== compare only value
===compare value and types

> Différences entre const et let

Attention on peut quand même faire un push dans une array ou un objet avec push.

> Différences entre null et undefined

Undefined apparait après une déclaration qui n'a pas été assignée.
typeOf(undefined)= undefined
typeOf(null)= object

> Explications arrow function

La différence est au niveau du this.
Lorsqu'on appelle une fonction dans une autre. A réviser.

> Prototypes inhéritance

        let car = function(model){
            this.model = model
        }

        car.prototype.getModel = function(){
            return this.model
        }

        let toyota = new car('toyota')
        console.log(toyota.getModel())


> différence entre déclaration de function et expression de fonction

        console.log(funcD())  => renvoie 'function declaration' (accessible avant sa création)
        console.log(funcE())  => renvoie 'undefined' car se comporte comme une variable (inacessible avant sa création)

        function funcD(){
            console.log('function declaration)
        }

        let funcE = function(){
            console.log('function expression')
        }


> Expliquer les promesses

    La promesse permet d'attendre. Déclenchement du callback lorsqu'elle est résolue.
        let p1 = new Promise(function(resolve, reject){
            resolve($.ajax('a.json'))
        })
        p1.then()


> setTimeout

    setTimeout(()=>{
        console.log('a')
    },0)

    console.log('b')
    console.log('c')

        L'ensemble renverra :
        'b'
        'c'
        'a'
        Parceque même si le timeout est a zéro, ca devient une fonction asynchrone qui du coup doit attendre la fin globale de l'exécution du code.

> Expliquer 'use strict'

    'use strict' interdit l'utilisation de variables non déclarées.


> Expliquer l'utilisation du https comment l'implémenter

> Explication this en Javascript

> Qu'est ce qu'une clojure en javascript


> Explications this en JS
Si on est dans un scope global on est alors dans le scope windows

  this.table = 'window table'

  this.garage = {
    table: 'garage table'
  }

  on pourrait appeler la table avec this.garage.table ou window.garage.table

Scope dans ume méthode

let johnsRoom = {
  table:'johns table'
  cleanTable(){
    console.log('cleaning ${this.table}')
  }
}

this dans une méthode:

const cleanTable = function(){
  console.log('cleaning ${this.table}')
}
cleanTable.call(this) //pour utiliser un scope global . J'ai pas bien compris à revoir.
