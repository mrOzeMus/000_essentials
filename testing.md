# Unit Testing with Jest

## Utilisation

        npm install jest

Ensuit dans package.json, mettre un script: 

        "test": "jest"
    
Création fichiers:

    functions.js
    functions.test.js

### Basic Exemple de test:

    functions.js:
    const functions = {
        add: (num1, num2) => num1 + num2
    }
    module.exports = functions

.

    functions.test.js:
    const functions = require('./functions')
    test('Adds 2 +2 equal 4', ()=>{
        expect(functions.add(2,2)).toBe(4)
    })


### Exemples de fonctions de test:

    const functions = require('./functions')

    test('Adds 2 +2 equal 4', ()=>{
        expect(functions.add(2,2)).toBe(4)
    })
    test('Adds 2 +2 not Equal 5', ()=>{
        expect(functions.add(2,2)).not.toBe(5)
    })

    test('Should be null', ()=>{
        expect(functions.isNull()).toBeNull()
    })

    test('Should be falsy',()=>{
        expect(functions.checkValue(null)).toBeFalsy()
    })

    test('User should be brad traversy', ()=>{
        expect(functions.createUser()).toEqual({firstName:'Brad', lastName:'Traversy'})
    })

    test('should be under 1600', ()=> {
        const load1 = 800
        const load2 = 700
        expect(load1+ load2).toBeLessThan(1600)
    })

    test('There si no I in team', ()=>{
        expect('team').not.toMatch(/I/)
    })

    test('Admein should be in usernames', ()=> {
        usernames=['john', 'karen', 'admin']
        expect(usernames).toContain('admin')
    })

    //Working with async data
    test('User fetched should be Leanne Graham', ()=>{
        expect.assertions(1)
        return functions.fetchUser()
            .then(data=>{
                expect(data.name).toEqual('Leanne Graham')
            })
    })

