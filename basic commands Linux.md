# Basic commands Linux

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
