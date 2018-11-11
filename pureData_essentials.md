# PureData_Essentials

## Basics

Pour creer un objet valable, ne pas oublier le ~.

Par exemple pour creer un generateur de tone, faire un objet 'osc~ 440'

  dac~ : digital analog converter (permet de convertir en signal analo)
  Le dac a deux entrees, pour channels gauche et droite.

Pour voir un signal en visuel,
  -> Creer un tableau appele display par exemple
  -> creer objet 'tabwrite~ display'
  -> mettre en entree un bang et la sortie de l'osc qu'on veut voir.

Multiplier un signal ou quelque chose:
  -> Faire une box *~


  reprendre la:
  https://www.youtube.com/watch?v=FPma9X8TYXA