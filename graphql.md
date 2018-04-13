# GraphQL essentials

Permet de travailler facilement avec des bases de données.
Permet de faire des requetes optimisées avec uniquement ce dont on a besoin.

Query:

    {
        user(id:"100"){
            name,
            email,
            posts{
                title
            }
        }
    }

The Data:

    {
        "user":{
            "id":"100",
            "name":"John Doe",
            "email":"john@gmail.com",
            "posts":[
                {"title":"Post 1"},
                {"title":"Post 2"}
            ]
        }
    }


GraphiQL est le terminal intégré qui permet de tester les requtês.

GraphQL marche avec tous les languages.


## Pratique (voir projet graphql-tuto)

Installer express et express-graphql (et nodemon)
et bien sur graphql

voir tuto: https://www.youtube.com/watch?v=ay81Q5JhkEw

Au final on a une base de données dans l'exemple en fichier json streamé sur localhost:3000 (comme si on travaillait avec une vraie bdd mongo ou autre)

Avec l'interface graphql on peut accéder ajouter ou modifier la base en se connectant a localhost:4000/graphql avec les méthodes suivantes:


    //Voir un customer
    # {
    #   customer(id:"3"){
    #     name,
    #     email,
    #     age
    #   }
    # }

    //Voir tous les customers
    # {
    #   customers{
    #     id,
    #     name,
    #     email
    #   }
    # }

    //ajouter un customer
    # mutation{
    #   addCustomer(name: "Harry White", email:"harry@gmail.com", age:34){
    #     id,
    #     name,
    #     email
    #   }
    # }

    //supprimer un customer
    # mutation{
    #   deleteCustomer(id:"4"){
    #     id
    #   }
    # }

    //editer un customer
    mutation{
    editCustomer(id:"2", age:54){
        id,
        name,
        age
    }
    }


Fichier de base server.js: 

    const express = require('express')
    const expressGraphQL= require('express-graphql')
    const schema = require('./schema.js')

    const app = express()

    app.use('/graphql', expressGraphQL({
        schema:schema,
        graphiql: true
    }))
    app.listen(4000, ()=>console.log('Serever running on port 4000'))


Fichier pour gestion graphql avec toutes les méthodes:

    const axios = require('axios') //pour pouvoir fetcher les données


    const {
        GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLSchema,
        GraphQLList,
        GraphQLNonNull
    } = require('graphql')


    //hardcoded data, inutile si on a la bdd sur un fichier json séparé ou une bdd.
    // const customers = [{
    //         id: '1',
    //         name: 'John Doe',
    //         email: 'jdoe@gmail.com',
    //         age: 35
    //     },
    //     {
    //         id: '2',
    //         name: 'Steve Smith',
    //         email: 'jdoe@gmail.com',
    //         age: 25
    //     },
    //     {
    //         id: '3',
    //         name: 'Sarah Porte',
    //         email: 'pognon@gmail.com',
    //         age: 86
    //     },
    // ]


    //Customer Type (définition des champs)
    const CustomerType = new GraphQLObjectType({
        name: 'Customer',
        fields: () => ({
            id: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            age: {
                type: GraphQLInt
            },
        })
    })


    //Root query
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {

            customer: {
                type: CustomerType,
                args: {
                    id: {
                        type: GraphQLString
                    }
                },
                resolve(parentValue, args) {

                    //uniquement si données sont hardcodées
                    // for (let i = 0; i < customers.length; i++) {
                    //     if (customers[i].id == args.id) {
                    //         return customers[i]
                    //     }
                    // }

                return axios.get('http://localhost:3000/customers/'+ args.id)
                .then((res=> res.data))
                
                }
            },
            customers: {
                //méthode qui renvoie tous les customers
                type: new GraphQLList(CustomerType),
                resolve(parentValue, args) {
                    return axios.get('http://localhost:3000/customers/')
                    .then((res=>  res.data))
                    return customers
                }
            }
        }
    })


    //Mutations, méthodes d'ajout de modif ou de suppression des customers
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields:{
            addCustomer:{
                type: CustomerType,
                args: {
                    name: {type: new GraphQLNonNull(GraphQLString)},
                    email: {type: new GraphQLNonNull(GraphQLString)},
                    age: {type: new GraphQLNonNull(GraphQLInt)},
                },
                resolve(parentValue, args){
                    return axios.post('http://localhost:3000/customers', {
                        name: args.name,
                        email: args.email,
                        age: args.age
                    })
                    .then(res => res.data)
                }
            },
            editCustomer:{
                type: CustomerType,
                args: {
                    id: {type: new GraphQLNonNull(GraphQLString)},
                    name: {type: GraphQLString},
                    email: {type: GraphQLString},
                    age: {type: GraphQLInt},
                },
                resolve(parentValue, args){
                    return axios.patch('http://localhost:3000/customers/'+ args.id, args)
                    .then(res => res.data)
                }
            },
            deleteCustomer:{
                type: CustomerType,
                args: {
                    id: {type: new GraphQLNonNull(GraphQLString)},
                },
                resolve(parentValue, args){
                    return axios.delete('http://localhost:3000/customers/' + args.id )      
                    .then(res => res.data)
                
            }
        }
    }
    })


    module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation
    })