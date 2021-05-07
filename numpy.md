# Numpy

Numpy est une alternative aux listes
Numpy est plus rapide dans toutes les opérations.
Numpy est une sorte de MATLAB replacement

## Définir array:

a = np.array([1,3,6], dtype='int16') // on peut spécifier le type
b = np.array([1,2,3], [2,8,3])

## Usage

// importation
import numpy as np

// obtenir dimension
a.ndim

// obtenir data type
a.dtype

// obtenir size (donne la taille mémoire en bytes d'un item)
a.itemsize

// obtenir taille totale en bytes
a.nbytes

// obtenir dimensions array
a.shape

// get a specific element (cas d'une array 2d)
a = np.array([[1,2,3,4,5], [8,9,10,11]])
a[1,5] // retourne index 5 dans l'array d'index 1

// get a specific row or column
a[0,:]
a[:,2]

// avoir une sub array [startindex:endindex:stepsize]
a[0, 1:6:1]

## manip avancée

// créer matrice
np.zeros((2,3)) // crée matrice de dimensions 2,3 initialisée à zéro
np.full((2,2), 99, dtype='float32') // idem mais initialization à 99

// random decimanl
np.random.rand(4,2) // donne matrice de nombre random entre 0 et 1 de dimensions 4,2
np.random.randint(7) // donne un nombre random entre 0 et 7

// deep clone d'une array
a.copy()

// il est possible de faire des opérations simples sur les éléments d'une array
a + 2
a - 2
a /2
a + b

// min, max, sum
np.min(a)
np.max(a)
np.sum(a)

// load data from file
filedata = np.genfromtxt('data.txt', delimiter=',')
filedata.astype('int32')
