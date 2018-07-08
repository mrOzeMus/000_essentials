# Basic commands Linux

(ethical haking video: 2h50re)

## Commands

voir variables PATH environnement:
echo $PATH
ajouter variable temporairement:
PATH=$PATH:/home/morgan/foldertoadd
prepend:
PATH=/root/directorytoadd:$PATH
ajouter de maniere definitive a PATH : modifier fichier ~/.bashrc voir example a la fin du fichier ou voir tuto sur internet

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

chercher

## Workshop

# File System

      root /
            = bin             // binaries system
            = opt             // stockage des programmes (chrome, firefox, etc ) optionnal software
            = boot            // system boot necessary files
            = root
            = dev             // devices (keyboard, mouse, etc)
            = sbin            // binaries
            = etc             // configuration files for the system !! important folder
            = srv
            = home            // user files by default
            = tmp             // temporary files
            = lib             // libraries (equivalent des dll de windows)
            = usr *           // universal system ressources (icones, ... )
            = media           // Une cle usb va automatiquement etre montee sur ce dossier
            = var *           // caches, backups
            = mnt

    sudo lshw : voir le systeme
    sudo lshw >> matos.txt : va ecrire le resultat dans un fichier txt.
    gedit matos.txt


    pwd : print working directory
    cd /home : revient au dossier home de base

    Ctrl + Shift + V : coller dans le terminal
    copy: cp matos.txt prout.txt
    remove: rm prout.txt

    copy vers un folder: cp test.txt /home/morgan/Downloads

    Supprimer tout dans un folder: rm -r MyDir
    clear: vider
    liste des commandes: man ls

    ls /home/morgan/Documents : montre fichier correspondant
    ls -a : montre tout meme les fichiers cachees.
    ls -l : montre les authorisations.

    Appuyer sur tab lorsqu'on fait cd /home/morga/Do
    Permet d'activer l'autocompletion ! tres cool!

    pushd /etc : permet de temporairement aller vers un fichier.
    popd : revient a l'emplacement d'origin.

    file myfile.wav : va donner des infos sur le fichier utile car souvent les extensions ne sont pas montrees.

    locate myfile.txt : permet de trouver un fichier sur le systeme.
    sudo updatedb : pertmet de mettre a jour la bdd pour justement localiser les fichiers.

    which spotify : permet de trouver une application.
    history: voir toutes les commandes passees recemment.

    mv myfile folder : deplacer un fichier
    rm * : supprimer tout dans le repertoire.

    cat >> myfile.txt : Permet d'ajouter du texte a un fichier.
    cat permet aussi de lire dans le terminal le fichier
    more text1.txt : voir un fichier page par page.
    less text1.txt : meme chose mais on a le controle ligne par ligne.

    nano newFile.js : cree un fichier text avec nano
    sudo -s : permet de rester en administrateur pendant un certain temps.
    exit : sortir du mode precedent.

    chmod +x file1 : permet d'attribuer des autorisations au fichier.
    rappel : voir les autorisations ls -l
    on peut aussi faire chmod 700 => donne read write uniquement au premier groupe (l'utilisateur)

    killall firefox : kill firefox

    chercher quelque chose: fsearch
    lancer un fichier: ./myscript.sh

    autoriser toutes les actions sur un fichier: chmod +x myscript.sh

      scroller dans un terminal: Ctrl + shift + up/down
      cat ./file : permet de monter directement dans le terminal
      less ./file.list : permet de montrer le fichier dans un nouveau terminal de maniere temporaire. (Q to exit);

      echo "I am alive" > test : va remplacer le contenu de test par "I am alive"

## Get into

### Anonymasisation

      hiddenwiki: faire une recherche sur tor, l'adresse change tout le temps
      Quand on doit aller sur internet specialement sur tor, ne pas utiliser l'utilisateur root principal , utiliser le compte secondaire test2 pour moi.

      /etc/proxychains.conf   //configuration proxy
      preferer toujours les protocoles SOCKS5 a HTTP , plus secures.
      service tor start : active tor  a faire systematiquement
      Faire ensuite: proxychains firefox duckduckgo.com

      Verifier si notre addresse IP est visible: chercher check for dns leak et voir notre geolocalisation.

      liste de proxy a utiliser : socks.proxy.net
      Choisir un pays genre hollande (bonne politique de confidentialite).

      choisir un vpn
      choisir openVpn a vpnbook.com (extraire)

      configurer vpn:
            openvpn --config vpnbook-euro1-tcp443.ovpn (auth et mot de passe sur le site0)
            c'est a faire avant chaque connection, verifier sur check dns leak si cela a fonctionne.


      ifconfig eth0 : voir parametres sur materiel et ipv6
      permet de savoir quel compagnie a fait le device et du coup chercher ses propres vulnerabilites.

      changer addresse mac:
      macchanger -s eth0            //show address
      macchanger --help

      les adresses mac identifient un materiel legit. Donc si on emprunte une mac addresse et qu'on fait des actions illegitimes, on se fait ban et donc le materiel lui legit se fait ban egalement.

      macchanger -r eth0    // prendre mac address random
      Il faut eviter d'utiliser sa mac address par securite
      Ca vaut le coup de faire un script pour changer l'addresse mac a chaque reboot ou reconnection.

      crontab -e : permet de faire des taches automatisees.
      example pour nous: @reboot macchanger -r eth0    // a chaque reboot l'addresse mac va changer

      nmap.org nous donne la permission de scanner son site

      nmap

      lorsqu on a une addresse ip il suffit de taper dans google who is 82.120.0.0 et on retrouve l'addresse physique la plupart du temps.

      nslookup scanme.nmap.org : observe le domaine.
      nmap scanme.nmap.org -vv : scanne le domaine (-vv permet de donner plus d infos)

      Scanner son reseau perso
      recuperer l'adresse dans inet de ifconfig

      nmap -oG - 10.0.2.0-15 -p 22 -vv /home/SCAN (le 0 - 15 signifie la range a scanner, ici entre 0 et 15). On sort les resultats dans un nouveau fichier.

      pour mieux voir les resultats: cat SCAN | grepp Up
      grep affiche seulement les lignes contenant le parametre associe (ici Up).

      ensuite faire du tri en faisant :
      cat /home/SCAN | grep Up | awk -F " " '{print $2}' > SCAN2    (permet d'afficher uniquement les addresses up)
      puis :
      nmap -iL SCAN2 -vv  : permet d'afficher plus de details sur ces addresses particulieres

      Avoir des infos sur une ip addresse pour s'entrainer:
      curl ipinfo.io/74.207.244.221

      liste de vulnerabilites un peu globale:
      nmap.org/nsedocs
      Donne pliens d'exemples d'exploits. C'est une liste de scripts qui sont prets a l'emploi pour les exploits.

      Aller voir egalement www.exploit-db.com . Egalement pleins d'exploits generaux.

### Password cracking

      Pour le password cracking le faire sur une machine virtuelle on est tres ralentit...
      Il vaut mieux le faire sur une machine dediee.
      Par exmple dans virtualBox on ne peut pas utiliser tous les cpu de la machine.

      On peut le faire sur linux ou meme windows, on a besoin de quelques outils:

      yum search aircrack-ng
      sudo apt-get install aircrack-ng
      sudo apt-get install reaver

      Aujourd'hui il n'y a pratiquement plus de WEP car trop facile a cracker

      installer egalement crunch (telecharger l'archive et faire make et make install)
      crunch cree des listes de mots de passe a tester selon les parametres qu'on lui passe.

      example : crunch 3 9 abcdefghijklmnopqrstuvwxyz
            //va creer touts les mots de passe avec letters en 3 et 9 lettres

#### Craker un wifi

      deconnection reseau puis reconnection en mode monitor:

            ifconfig
            sudo ifconfig wlp4s0 down
            sudo iwconfig wlp4s0 mode monitor
            sudo ifconfig slp4s0 up

            airmon-ng check wlp4s0
                  // ici il faut tuer les process en trop qui vont nous gener pendant nos manips
            kill (numero correspondant au network manager)
                  // tuer ensuite dhclient
                  // le reste  il ne doit plus rien y avoir
                  // la commande sudo systemctl disable avahi-daemon peut aider

            On va scanner les environs pour voir tous les ponits de connection disponible

            sudo airodump-ng wlp4s0

(reprendre a 6h10 ici probleme je ne vois rien en scann voir si y'a un soucis)
