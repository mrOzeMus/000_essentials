# C# Essentials

## Differences entre C# et .NET

.NET est un framework pour des applications windows.
.NET = CLR (Common language runtime) + Class Library

Avant C# il y avait uniquement C et C++.
C# permet de compiler en un language intermediaire non dependant de la machine. (Intermediate Language).
La JIT (just in Time compilation) se fait apres sur la machine correspondante.

En C# l'application est composee de classes.
Une classe est un container qui contient des Datas et des Methods.

Ex:
Car
  => Make, Model, Color
  => Start(), Move()


Namespace est un container de differentes classes.
Assembly (DLL or EXE) contient les differentes namespaces. (DLL = Dynamic Link Library)


## Language

Pour compiler et ouvrir dans VS on fait Ctrl + F5.
Pour complier : Ctrl + Shift + B.

Data types:
```
int number;
int Number = 1;
const float Pi = 3.14f;
char character = 'A';
string firstName= "Mosh";
```

** on peut aussi utiliser var pour declarer quelque chose, du coup C# va attribuer tout seul un type ! **

Types dispo:
byte, short, int, long, float, double, decimal, char, bool

Si on veut utiliser un float, il faut expliciter dans la declaration avec le f:
float number = 1.2f;
decimal number = 1.2m;

Conventions:
For local variables => use Camel Case : int number;
For constants => use Pascal Case : const int MaxZoom = 5;


```
Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);

```


En C# on peut convertir un type dans un autre si il n'y a pas de perte de donnee.
Donc on peut faire:
int i = 1;
float num = i;

Mais on ne peut pas faire l'inverse a moins d'expliciter avec type casting:
int i = 1;
byte b = (int)f;
ou
float f =1.0f;
int i = (int)f;

Pour convertir une string en un number il faut faire:
string s = "1";
int i = Convert.ToInt32(s);
int j = int.Parse(s);


## Gestion erreurs

```
try{

}
catch (Exception){
}
```