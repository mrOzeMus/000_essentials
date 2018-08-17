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

    int myArray[10] : initialisation d'une array.

## Types

    char    caractere, un seul octet
    short   nombre entier court
    long    nombre entier long
    double  nombre a virgule flottante en double precision

Definition d'une array:

    int numbers[7] = {3, 4, 5, 6, 7, 9, 10};

On ne peut pas directement d'apres ce que je comprends rentrer l'array anonyme dans la foncton, il faut d'abord la definir et la nommer de la facon ci dessus.

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
      wh        \0 : caractere nulile((c= getchar()) != EOF)
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

## Ecriture d'une fonction

Exemple d'une fonction puissance d'un chiffre:

    int puiss(int base, int n){
        int i, p;
        p=1;
        for (i=1; i<=n ; ++i){
            p = p * base;
            return p;
        }
    }

## Variables globales

Pour utiliser une variable globale il faut la definir une fois a l'exterieur de toute fonction, et ensuite la redefinir a chaque fois qu'on veut l'utiliser dans une fonction:

    #include <stdio.h>
    #define MALIGNE 1000
    
    int max;
    char ligne[MAXLIGNE];
    char pluslongue[MAXLIGNE];

    int lireligne(void);
    void copier(void);

    main(){
        int l;
        extern int max;
        extern char pluslongue[];

        ...
    }


## Caracteres d'echapement:

        \a : caractere d'alerte (sonnerie bell)
        \b : retour arriere (backspace)
        \f : saut de page
        \n : fin de ligne
        \r : retour chariot
        \t : tabulation horizontale
        \v : tabulation verticale
        \\ : backslash
        \? : point d'interrogation
        \' : appostrophe
        \" : guillement
        \ooo : nombre octal
        \xhh : nombre hexadecimal
        \0 : caractere nul

## enums

Si on ne precise pas , le premier nom d'une enum est 0 et l'autre 1

    enum logique { NON , OUI }

sauf si on precise les valeurs :

    enum echaps { SONNERIE = '\a', ARRIERE = '\b', TAB = '\t' , LIGNE = '\n', ... }

ou un peu comme un excel on peut incrementer automatiquement :

    enum mois { JAN =1, FEV, MAR, AVR, MAI, JUN ... } // FEV vaudra 2, MAR vaudra 3, etc..
