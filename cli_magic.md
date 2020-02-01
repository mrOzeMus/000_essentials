# CLI Magic

Conference : https://www.youtube.com/watch?v=4kckdHN908A

Useful keystrokes:
    Ctrl + r = recherche **Très utile!**
    Ctlr + a = beginning of line
    Ctlr + e = end of line
    Ctlr + w = yank (delete) last word
    Esc + . = insert last argument from the last line

SSH keystrokes:
    [RET] ~C
    [RET] ~.



Jobs control:
    Ctrl + z
    jobs
    fg
    bg      // keep running in the background
    kill %1     // % reference to the job


Variables
    MYWORD="aimlessness"
    export MYWORD
    env & set
    ALPHABET=$(echo {a..z}|tr -d '')
    echo ${ALPHABET:0:3}

Special variables
    echo $(($RANDOM %100))      // genere un nombre aleatoire entre 0 et 100
    echo $COLUMNS $LINES        // dis la hauteur et largeur du terminal
    echo $OLDPWD                // donne le repertoire dans lequel on était précedemment


Functions:
    Le $@ permet de specifier les arguments qui viennent apres
    Exemple:
        uploadphotos(){ scp -rp "$@" you @webaserver:www/photos/;}
        -> Usage: uploadphotos IMG_{3201..3250}.JPG

    
Misc tricks
    du -sh */       // le */ permet de voir le repertoire seulement.
    tail -n+2 data.csv              // permet de ne pas monter le header du fichier.


Output redirection:
    ls -l > output.txt
    ls -l filetahtdoesntexit 2> out.err         // redirection standard error


awk & sed:
    awd '{print $1}' inputFile          // monter premiere ligne


**loops:**
    for i in 1 2 3 ; do echo $i ; done
    for i in *.jpg; do convert $i ${i%.jpg}.png; done
    while true; do uptime; sleep 5; done
    while :; do iwlist wlan0 scan | awk -F \" '/ESSID/{print $2}'|espeak;done