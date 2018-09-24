# Processing Essentials


Declaration array:

```processing
int[] numbers = new int[3];
int[] numbers = { 90, 40 , 234 };
```
Vecteurs:
```processing	
PVector[] vectors = new PVector[5];
```

2D Array:

Declaration brute:
```processing
int[][] myArray = {
	{ 43, 49, 30},
	{ 49, 20, 20}
	}
int[][] myArray = new int[cols][cols];
```

Declaration classes:
```processing	
Cell[][] grid = new Cell[cols][rows];
```

Elegent loop:

Pour faire cela, il faut que numbers soit une Array List, ne marche pas avec les classes.
```processing
for( float val : numbers ){
...
}
```
## Declarations ArrayList

En supposant qu'il existe une classe Particle:
```processing
ArrayList<Particle> particles = new ArrayList<Particle>();

//Ajouter un objet:
particles.add(new Particle());

//Obtenir l'objet:
Particle part = particles.get(0);
part.display();

//Obtenir la taille
int total = partciles.size();

//On peut iterer de deux facons dans l'arraylist:
//1:
for(int i=0; i < particles.size(); i++){
	Particle part = particles.get(i);
	part.display();
}

// ou 2:
for(Particle part : particles){
	part.display();
}

//Delete particles from ArrayList
particles.remove(0);
```

** Lorsqu'on enleve des elements pendant la loop il faut looper a l'envers pour bien iterer sur tous les elements.**

```processing
for(int i = particles.size() -1 ; i>=0; i--){
	Particle part = particles.get(i);
	if(part.finished()){
		particles.remove(i);
	}
}
```