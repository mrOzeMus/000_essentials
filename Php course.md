# PHP Course

https://www.udemy.com/object-oriented-php-mvc/learn/v4/t/lecture/8283382?start=0

Voir mes fichiers dans: c:/xamp/htdocs/php-course

Création framework et notions php.

## Constructor class

Exemple de construction, ca ressemble pas mal a processing.

    <?php
        
        class User{

            public $name;
            public $age;
            
            public function __construct($name, $age){
                echo 'Class' . __CLASS__ . ' instanciated';
                $this-> name = $name;
                $this-> age = $age;
            }
            
            
            public function sayHello(){
                return $this->name . ' says Hello';
            }

            public function __destruct(){
                //fonction lancée à la fin, quand il n'y a plus d'appel a l'objet.
                echo 'destructor ran...';
            }
        }

        $user1 = new User('Brad', 36);

        echo $user1->name . ' is ' . $user1->age . 'years old';

Exemple avec plus de propriétés. (voir les fichiers d'exemples a moi pour plus d'explications):

    <?php 
        class User{
            public $name;
            public $age;
            public static $minPassLength = 6;

            public static function validatePass($password){
                if(strlen($password) >= self::$minPassLength){  //on utilise self:: parce que minpassLength est static
                    return true;
                }else{
                    return false;
                }
            }
        }

        $password = 'hello';
        if(User::validatePass($password)){   //on utilise User:: au lieu de this pareque c'est static
            echo 'Password valid';
        }else{
            echo 'Password not valid';
            }



## MVC Model View Controller


## EXemple base de données PDO

Pdo est la base de données par défault de mysql. Ci après un exemple de base de données, en tout cas d'accès en php après avoir crée une base avec phpmyadmin.

      <?php 
    $host = 'localhost';
    $user = 'root';
    $password = 'admin';
    $dbname= 'pdotest';


    //Set DSN
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;

    //Create a pdo instance
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    $status = 'admin';
    $sql = 'SELECT * FROM users WHERE status = :status';
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['status' => $status]);
    $users = $stmt->fetchAll();

    foreach($users as $user){
        echo $user->name . '<br>';
    }

Ajouter une entrée dans la base de facon sécure (en évitant les injections):

        $name = 'Karen Williams';
        $email = 'kwills@gmail.com';
        $status = 'guest';

        $sql = 'INSERT INTO users(name, email, status) VALUES (:name, :email, :status)';
        $stmt = $pdo->prepare($sql);
        $stmt -> execute(['name' => $name, 'email' => $email, 'status' => $status ]);
        echo 'added user';