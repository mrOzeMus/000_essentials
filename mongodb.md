# mongoDB

Mongo db est un système de base de données un peu comme mysql

pour y accéder via le terminal si on veut voir ce qui se passe:

    c:
    cd.. mongodb
    cd.. bin
    mongo

une fois la plusieurs commandes sont possibles:

    use Mydatabase   // rentre dans une base
    show collections   // montre les 'tables' de la base
    db.myCollection.find().pretty()   //affiche toutes les entrées de la table

Créer une nouvelle database
    use newDatabase
(pour voir la database dans la liste il faut créer au moins une entrée)

    db.createCollection('users')
    db.users.insert({ 'name' : 'Morgan' , 'password': 'prout'})    //insertion data

    pour voir toutes les entrées d'une collection:

    db.users.find().pretty()
