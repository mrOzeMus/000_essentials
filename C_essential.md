# Learn C language

## Premier programmer

    #include <stdio.h>

    main(){
      printf("hello world \n");
    }

Pour compiler, il faut rentrer en ligne de commande :

    gcc bonjour.c  // va generer la sortie a.out
    ./a.out  // executer le fichier compile

## Instructions basiques:

    printf : afficher dans la console.
    printf("%d\t%d\n", fahr, celsius)  : affiche les variables selon des types specifiques. Par exemple,%d designe un entier. \t signifie une tabulation.

    %3.0f : signifie qu'il faut afficher un nombre en virgule flottante sur une largeur minimun de trois caracteres, sans point decimal ni chiffre apres la virgule.

    %6.1f : signifie qu'il faut afficher un nombre en virgule flottante sur au moins 6 caracteres, avec 1 chiffre apres la virgule.

    %d : entier decimal
    %6d : entier decimal sur une largeur minimum de 6 caracteres
    %f : affiche un flottant
    %6f : flottant sur largeur minimum de 6 caracteres
    %.2f : flottant avec 2 chiffres apres la virgule
    %6.2f : flottant sur 6 caracteres avec 2 chiffres apres la virgule.
    %x : hexadecimal
    %c : caractere
    %s : chaine de caracteres
    %% : pour le signe % lui meme
    EOF : sur linux c'est Ctrl + D

## Types

    char    caractere, un seul octet
    short   nombre entier court
    long    nombre entier long
    double  nombre a virgule flottante en double precision

## Constante symbolique

    #define   nom   texte de remplacement

Exemple:

    #include <stdio.h>

    #define MINI  0
    #define MAXI  300
    #define INTER 20

    main(){
      int fahr;
      for(fahr = MINI ; fahr <= MAXI; fahr = fahr + INTER){ ... }
    }

## getchar

Pas bien compris encore mais ici un exemple de programme qui recopie ce qu'ecrit l'utilisateur:

    #include <stdio.h>
    main(){
      int c;
      while((c= getchar()) != EOF)
        putchar(c);
    }
    // EOF = End of File

Autre exemple, programme qui compte le nombre de lignes qu'on tape:

    #include <stdio.h>
    main(){

      int c, nl;
      nl =0;

      while((c=getchar()) != EOF )
        if( c == '\n')
          ++nl;
        printf("%d\n", nl);
    }
