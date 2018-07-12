# Max Msp Essentials


## Important

    Lock/unlock: Ctrl + E

## Modules Utiles

    Nombre aleatoire : Bang >> Random 6 >> Int
    umenu : Permet de faire un menu deroulant
            En general relie a pack s s s s ( pour avoir 4 parametres par exemple a choisir). Sur le umenu prendre la sortie du milieu.

## JS

    js: js firstJs.js (faire click droit editer ou double click??).
    enregistrer le fichier dans le repertoire du patch afin qu'il puisse etre retrouve.
    Attention, c'est un vieux javascript il vaut mieux utiliser var.

    Dans le fichier, ecrire:

        autowatch = 1; //permet de synchroniser si on utilise un editeur de texte genre vscode
        let myVariable = 10;
        post(myVariable); //ecrit dans la console de max
        function testFunction(param){
            post('hello' + param);
            post(); //permet dans la console de passer a la ligne suivante
        }

    Le truc cool c'est qu on peut appeler la fonction dans max avec un element m. Quand on clickera dessus la fonction est execute. On peut aussi appeler un parametre en le rajoutant apres testFunction

        testFunction 'hello' ----- (js firstJs.js)

        >.0 --- testFunction $1 ----- (js firstJs.js)


## jit

    Taper j pour avoir directement un objet jit

        jit.qt.movie 320 240

        Exemple:

        (m) read dishes.mov --- jit.qtmovie 320 240 ---- jit.pwindow
            toggle --- metro(40)-|

    Le metronome est necessaire c'est lui qui envoie un signal pour recuperer la nouvelle frame.

        ### jit.op

    Permet de melanger des flux video.

        (2 entrees jit.qt.movie) >> jit.op @op + + + >> jit.pwindow
        Les plus signifient les operations sur les canneaux