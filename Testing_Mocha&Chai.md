# Testing Tutorial with Mocha & Chai


## installation


    npm install mocha chai --save -dev

Dans le fichier package.json remplacer le script 'test' par:

    "test": "mocha || true"

Le true sert à n'afficher que le résultat du test. Possible de l'enlever mais les logs sont moins visibles.

Créer à la racine un dossier 'test' et à l'intérieur créer 'appTest.js'

Dans le fichier appTest.js:

    const assert = require('chai').assert
    const app= require('../app')

## Ecrire un test Test:

> Tester un résultat

Toujours dans apptest.js:

    describe('App', function(){
        it('app should return hello', function(){
            assert.equal(app(), 'hello')
        })
    })

Ici le deuxième paramètre de assert est la réponse attendue

Lancer le test en faisant npm run test.


> Tester un type 

    const sayHello = require('../app').sayHello   //fonction a tester

    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(resultu, 'string')
    })

> Tester une condition


    it('addNumbers should be above 5', function(){
        let result = addNumbers(5,5);
        assert.isAbove(result, 5)
    })
