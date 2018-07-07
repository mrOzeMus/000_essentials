# Linux terminal

## Commands

pwd: Affiche répertoire en cours.
cd: change directory.
cd /sbin : absolute path
cd sbin : relative path
cd ./sbin : aller vers le répertoire 'de même niveau'
cd ~ : aller au home de l'user
cd ~/Documents : aller directement a home/Documents
cd ../
ls : equivalent de dir
ls -l : donne plus de détails
ls -p : classement par type
ls --help
sudo nano ./file : ouvrir avec nano un fichier texte.
!! : relancer la commande précédente.
sudo !! : relancer la commande précédente en admin
sudo su : switch user
sudo apt-get install bluefish : installer l'éditeur bloofish
apt-cache search bluefish\* : chercher dans un répertoire

## Workshop

# File System

      root /
            = bin
            = opt
            = boot
            = root
            = dev
            = sbin
            = etc
            = srv
            = home
            = tmp
            = lib
            = usr *
            = media
            = var *
            = mnt
