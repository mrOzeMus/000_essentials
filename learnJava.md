# Java Essentials

## Intro 

Creation de base d'un programme java
(il faut avoir le java sdk installe).

    -> Creer fichier Example.java:
    class Example{
      public static void main(String args[]){
        System.out.println("Java drives the web");
      }
    }
  
    compiler : javac Example.java
    executer : java Example

Lorsque java compile il fait un fichier par classe. (fichiers .class)

## Fonctions

    System.out.println("Something " + value);  // Met un retour a la ligne ensuite.
    System.out.print("something");
    System.out.println();  // print a blank line.

## Types

    byte : -128 a 127
    short: -32 000 a 32 000
    int: -2 000 000 000 a 2 000 000 000
    long: -beaucoup a beaucoup
    float
    double
    char ch; ch = 'X';

On peut faire des operations sur les chars, les incrementer ou les traiter comme des int.

## Lecture entree clavier

La lecture des caracteres est fait avec System.in.read();

    class Example{
      public static void main(String args[])
        throws java.io.IOException{
        System.out.println("Java drives the web");
          char ch;
          System.out.println("Press a key + Enter");
          ch = (char) System.in.read();
          System.out.println("Your key is " + ch);
        }
    }

## For Loop

En java, il est possible de faire une for loop sans l'incrementation de i dans l'en tete. Ca donnes ca:

    for(i=0; i< 10;){
      System.out.println("Pass # " + i);
      i++; // Incrementation de la loop.
    }

Example de boucle infinie utilisee:

    for(;;){
      // ...
    }

Autre exemple, loop sommant tous les nombre jusque 5:

    int sum = 0;
    for(i=1; i<= 5; sum += i++);
    System.out.println("Sum is " + sum);