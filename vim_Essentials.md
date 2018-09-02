# VIM CheatSheet

i: insert
a: append
A: insere a la fin de la ligne

p: paste
dd : efface une ligne
w : mot suivant
b : mot precedant
gg : aller au haut de la page
G : aller au bas de la page.
e : aller a la fin du mot / mot suivant.
0 : debut de la ligne.
$ : fin de la ligne.
v $ : rentre en mode visual et selectionne la ligne
y : copier
p : coller
P : coller avant
S : remplacer ligne
o : insere ligne apres
O : insere ligne avant

D : supprime le reste de le ligne
shift I : edit le debut de la ligne.

"*yy : copier vers clipboard
"*p : coller depuis clipboard

ci" : change inside "".

/ : search forward
? : search backward
n : next result
N : previous result

* : cherche le mot sous curseur apres
# : cheche le mot sous curseur avant

u : undo
Ctrl+R : redo
. : repeter une action


yy : copier ligne
:%s/foo/bar/g : chercher foo dans le document et le remplacer par bar
:5,12s/foo/bar/g : chercher et remplacer entre les lignes 5 et 12.

25 G : va directement a ligne 27


# HTML

cit : change inside tags
yit : copy inside tags



(Hello 'world')

...
th test tHis is a test 
<>input>t
<>input>tes<>/input>
<>input>test<>/input>


## Neovim

Fichier config dans ~/.config/nvim/init.vim
Pour installer un PlugIn , mettre son nom dans le fichier config et faire dans nVim un :PlugInstall


## Commandes plus avancees

    Pour effacer jusqu'a un element (comme une apostrophe par exemple):
      df'  // delete find '
    On peut ensuite repeter l'operation avec "."

    Pour se deplacer:
      - H va en haut de l'ecran.
      - M va au milieu de l'ecran.
      - L va en bas de l'ecran.

    **Tres cool!!** : Change surroundings
    Pour changer une parenthese en crochets par exemple,
    se mettre a l'interieur et faire:
      cs({ // change surroundings () en {}

    Se deplacer de paragraphe en paragraphe , (tres utile):
      { ou }
    
    Ajouter des guillemets aux 2mots en cours:
      ys2w" // ajoute surroundings aux 2 mots avec ""

    Faire un split vertical (marche aussi dans vscode)
      :vsp  //vertical split

    Copier/coller:
      Pour voir les registres qui contiennent les copies stockees, faire:
        :reg
      Utilisation:
      Pour copier dans registre a par exemple, faire
      "ayy
      Pour coller ensuite faire:
      "ap
      (" permet de choisir le registre en quelque sorte)

    Remplacer dans une selection:
    faire une selection en visual mode, puis faire:
      :s/wordtosearch/wordtoreplace/gc   // gc est facultatif permet de demander une confirmation a chaque fois
    pour faire la recherche et remplace sur tout le document, faire:
      :%s/search/replace/gc   // gc pour confirmation , %s veut dire tout le document

    Se deplacer sur la ligne:
    Une facon tres efficace de se deplacer est de faire:
      fU   // c est une exemple, ici on cherche le premier U majuscule de la ligne, le curseur va y aller automatiquement.
    Pour aller au suivant on fait ; pour aller au precedent, on fait ,

    Marqueurs ** peuvent etre tres puissant **
    Pour mettre un marqueur au curseur, faire:
      ma  // marqueur a par exemple
    Pour y aller ensuite, faire
      `a

    Move to relative lines:
    Pour bouger d'un certain nombre de lignes, faire:
      12 k  // deplace de 12 lignes vers le haut
      10 j  // deplace de 10 lignes vers le bas
