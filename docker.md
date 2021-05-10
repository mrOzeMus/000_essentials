# Docker

Une image est un template
Un container est une instance d'une image. On peut run plusieurs container de la même image

Voir les instances en cours
    docker ps -a

Mode détaché (pour ne pas être bloqué dans le terminal)
    docker run -d -P -name <name> <myimage> (-d : detach, -P : publish all exposed ports)

Supprimer container
    docker rm <container>

Supprimer image
    docker rmi <image>

Voir les images en local
    docker images

.dockerignore
    include node_modules, npm-debug.log

Créer la build
    docker build Dockerfile -t <username>/node-web-app

Lancer le container
    docker run -p 3002:3000 -d <username>/node-web-app

Interactive mode (permet de mapper la console stdin, sinon le container exit immédiatement)
    docker run -i kodekloud/simple-prompt-docker

Voir les logs
    docker logs <container_id>

Se connecter à la machine
    docker exec -it <container_id> /bin/bash

Voir les images
    docker run images

Mapper un répertoire extérieur pour data persistence
    docker run -v /opt/datadir:/var/lib/mysql mysql

Passer une variable d'environnement
    docker run -e APP_COLOR=blue simple-webapp-color

Voir détails (permet de voir par exemple les environnement variables)
    socker inspect <container>

Linker plusieurs containers.
Par défaut chaque container peut accéder à un autre un appelant l'adresse hote par son nom de container
Il faut linker les containers
    docker run -d --name=vote -p 5000:80 --link redis:redis voting-app (dans le cas d'un microservice redis)
    Faire ceci engendre en réalité l'écriture dans /etc/hosts de la digne
        '172.17.0.2    redis 892jdkalfj2kjfa'

Spécifier une entry point (sert à passer un argument lors de la commande docker run )
exemple:
    (dockerfile)` FROM Ubuntu
    ENTRYPOINT ["sleep"]
    `
    docker run ubuntu-sleeper 10  (=> 10 est passé comme argument en lancement (en append))


DockerFile:

```
    FROM node:14
    #create app directory
    WORKDIR /usr/src/app

    #Install app dependancies
    #A wildcard is used to ensuire both package.json AND package-lock.json are copied
    COPY package*.json ./

    RUN npm install
    # If in production, run:
    # RUN npm ci --only=production

    #Bundle app source
    COPY . .

    EXPOSE 8080
    CMD ["node", "server.js"]
```


