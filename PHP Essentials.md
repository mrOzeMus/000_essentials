# Php Essentials


## Crash Course

utiliser un script php dans une form:

    <form action="learn.php" method="post">

De cette facon le script se lance au moment du submit.


## Ouvrir un fichier php dans le browser:

Php est un langage server, donc a priori illisible pour les pc. Pour lire un php il faut utiliser par exemple xampp:

Configuration:

- Ouvrir xampp control panel
- sur la ligne apache cliquer sur config >  httpd.conf
- Le réportoire utilisé est vers le milieu du doc, ressemble a :

    DocumentRoot "C:/xampp/htdocs"
    <Directory "C:/xampp/htdocs">

- C'est le répertoire lu par défaut sur localhost. C'est donc ici qu'il faut mettre le projet.


### Structure du fichier php

    <html>
        <head>
            <title>Information Gathered</title>
        </head>

        <body>

        <?php

        /*
        multiline comments
        */

        ?>

        </body>
    </html>


### commandes php

Affiche sur l'écran:

    echo "<p>Data processed</>";

Affiche date:

    date_default_timezone_set('UTC');
    echo date('h:i:s:u);

Variables depuis form:

    $usersName = $_POST['username'];
    $streetAddress= $_POST['streetaddress'];
    $cityAddress= $_POST['cityAddress'];
    echo $usersName . "</br>";
    echo $streetAddress . "</br>";
    echo $cityAddress . "</br>";

Console:
var dump permet de voir les caractéristiques d'une variable. C'est une sorte de console log mais qui affiche sur l'écran.

    var_dump("string");

Définir une array:

    $arrayVar = array("River", 33,true, 4.8);

Declare a Class:

    class Car{
        function Car(){
            $this -> model = "Dodge";
        }
    }
    $theGeneral = new Car();
    var_dump($theGeneral -> model);

Make a reusable string:

    define("welcome", "welcome to WebsiteBytes");
    echo welcome;

Rentrer des valeurs dans une array

    $array1= array("a" => "Red", "b"=>"Blue");
    $array2= array("c" => "Green", "d"=>"Yellow");
    var_dump($array1 + $array2);


for loop et foreach loop:

    for($x = 0; $x < 10; $x ++ ){
        echo "x is now $x <br>";
    }
    $arrayVar = array("Dodge charger", "Rover", "Audi", "Ford");
    foreach($arrayVar as $car){
        echo "$car <br>";
    }

longueur d'une array:

    $indexed= array("red", "blue", "green");
    $arrLength= count($indexed);


## Astuces

Appeler la form dans la même page:
  => Utiliser la variable globale $_SERVER['PHP_SELF']

    <form action="<?= $_SERVER['PHP_SELF']"; ?> method="post">
    ...

Include un fichier:

    <?php include('form_process.php'); ?>
