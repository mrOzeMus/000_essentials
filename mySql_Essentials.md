# My SqlEssentials


## info:

Il est possible de créer des databases et des entrées via le terminal mais on ne va pas l'aborder ici. On va se concentrer sur phpmyadmin et les requêtes associées en php.

Il y a aussi 2 facon de faire en php : objet ou fonctionnel. Il ne faut pas mélanger les 2 méthodes.

Pour plus de détails et une méthode plus propre en matière d'encryptage et de sécurité voir la suite:
https://www.youtube.com/watch?v=xb8aad4MRx8

Structure:

Database --- Table 1 (student)
         --- Table 2 (class)
         ---Table 3 (teachers)


Connection à la base de données:

    <?php 
    
    DEFINE('DB_USER', 'root');
    DEFINE('DB_PASSWORD', 'admin');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_NAME', 'test-database');

    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die('Could not connect to MySQL . mysqli_connect_error());
    ?>

Ou

    $conn = mysqli_connect('localhost', 'root', 'admin', 'login-system');

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
Insérer le fichier ensuite avec:

    <?php
        require_once('../mysqli_connect.php'); //le fichier plus haut

        ...
        (requetes)
        ...
    ?>



# Si on veut ajouter une entrée via un formulaire

        <form action='signup.php' method='post'> ... </form>

Il faudra faire des règles de validation etc. Ici on va se concentrer sur l'insertion des données.

        <?php

    session_start(); //sert pour garder la session active (a mettre sur toutes les pages qu'on veut garder en session ouverte)
    include 'dbh.php';

    $first = $_POST['first'];
    $last = $_POST['last'];
    $uid = $_POST['uid'];
    $pwd = $_POST['pwd'];

    // echo $first;
    // echo $last;
    // echo $uid;
    // echo $pwd;

    $sql = "INSERT INTO user (first, last, uid, pwd)
    VALUES ('$first', '$last', '$uid', '$pwd')";

    $result = mysqli_query($conn, $sql);

    header("Location: index.php"); //sert a redirigers vers la page acceuil


# Login: 

Avec un autre formulaire sur la page d'acceuil on peut se logger. le formulaire appelle ce fichier signin.php:

    <?php

    session_start();
    include 'dbh.php';
    $uid = $_POST['uid'];
    $pwd = $_POST['pwd'];
    $sql = "SELECT * FROM user WHERE uid='$uid' AND pwd='$pwd'";

    $result = mysqli_query($conn, $sql);

    if( !$row = mysqli_fetch_assoc($result) ){
        //si on n'a pas de résultats de la database
        echo 'Your username is incorrect';
    } else {
        // echo 'You are logged in';
        $_SESSION['id'] = $row['id'];
    }

    header("Location: index.php");
    ?>


# Logout: 

Tout simplement également avec un form sur la page d'acceuil, on tue la session:

    <?php
    session_start();
    session_destroy();
    header("Location: index.php");




# Au final la page index.php ressemble a :


    <?php 
    session_start();
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

    Test data base connection login system

    //formulaire login
    <form action="login.php" method="Post">
    <input type="text" name="uid" placeholder="username" /><br>
    <input type="password" name="pwd" placeholder="password" /><br>
    <button type="submit">
    LOGIN
    </button>
    </form>


    <?php 
        if(isset($_SESSION['id'])){
            echo $_SESSION['id'];
        } else {
            echo 'You are not logged in';
        }

    ?>


    //formulaire signup
    <form action="signup.php" method="Post">
    <input type="text" name="first" placeholder="firstName" /><br>
    <input type="text" name="last" placeholder="lastname" /><br>
    <input type="text" name="uid" placeholder="username" /><br>
    <input type="password" name="pwd" placeholder="password" /><br>
    <button type="submit" name="submit">Sign up</button>
    </form>

    //formulaire logout
    <form action="logout.php">

    <button type="submit">LOG OUT</button>
    </form>


    </body>
    </html>
