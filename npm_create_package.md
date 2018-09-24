# NPM create and publish a package

## User

Il faut d'abord creer un npm init de l'application, et si on veut pouvoir publier, il faut se logger sur npm.
On peut le faire depuis la ligne de commande.

    npm whoami
    npm login
    //si besoin npm adduser

Changer de version:

    npm version 1.0.1 //par exemple
    npm publish

Le nom du module doit bien sur etre unique.


Pour updater:

    npm version 1.0.2
    npm publish