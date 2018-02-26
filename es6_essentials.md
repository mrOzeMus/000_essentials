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
