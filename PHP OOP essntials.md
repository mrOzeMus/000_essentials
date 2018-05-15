# PHP OOP Essentials


Creer une classe:

    <?php
    class Customer{
            public $id;
            public $name;
            public $email;
            public $balance;
    }

    ?>

private //inacessible en dehors de la classe
protected //accessible seulement sur les classes qui extendent celle ci

Méthods:

    ...
    public function getCustomers($id){
        $this->id = $id;
        return 'John Doe';
    }

    $customer = new Customer;
    echo $customer->id;
    echo $customer->getCustomer(1);

Magic Methods: (lancée a la création de l'objet):

    public function__construct($id, $name, $email, $balance){
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->balance = $balance;

        echo 'The constructor ran';
    }

    public function __destruct(){
        echo 'The destructor ran... ';
    }

    $customer = new Customer(1, 'Brad Traversy', 'brad@gmail.com', 500);

Extension d'une classe

    class Subscriber extends Customer{
        
        public $plan;
        
        public function __construct($id, $name, $email, $balance, $plan){
            parent::__construct($id, $name, $email, $balance);
            $this->plan = $plan;
        //appel de la fonction de construction du parent
        }
    

    }

Static: 
Static permet de ne pas pouvoir modifier la propriété.
Lorsqu'on veut accéder a une fonction static, on n'utilise pas this, mais self
ex>

        class User{
            public $username;
            public $password;
            public static $passwordLength = 5;

            public static function getPasswordLength(){
                retrun self::$passwordLength;
            }
        }

    echo User::$passwordLength;