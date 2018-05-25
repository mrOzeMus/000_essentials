# Laravel essentials


## Creation projet:

	composer create-project laravel/laravel todolist
	
Il est mieux pour que l'utilisateur n'ait pas acces aux fichiers de dev creer un serveur local vers le dossier public du projet. Pour ca:

Ouvrir xampp/apache/conf/extra/http-vhosts.conf

et rajouter la ligne:

	<VirtualHost *:80>
		DocumentRoot "C:/xampp/htdocs/todolist/public"
		ServerName todolist.me
	</VirtualHost>
	
ensuite ouvrir notepad en admin et ouvrir : C/windows/system32/drivers/etc/hosts
Ajouter alors:

	127.0.0.1 todolist.me

Relancer apache

On devrait alors pouvoir acceder au projet avec l'adresse todolist.me

## Projet

Creer Controller: 

	php artisan make:controller TodosController --resource
	
Le fait de mettre --resource va creer des routes pour nous:
- index: liste les todos
- create
- store (sauvegarder quand on cree)
- show
- edit
- update
- destroy (delete)

On aura pas besoin de creer de routes pour touts ces fonctions.
Il suffira de faire:

	Route::resource('todo', 'TodosController');


## Lier une base de donnees

D'abord creer le base de donnes avec phpmyadmin
Ensuite:

	php artisan make:model Todo -m

(-m va creer la migration associee)

Modifier le fichier env et remplir DBNAME, USER et PASSWORD

Puis naviguer dans database/migrations/todostable (la migration qui vient d'etre cree) et renseigner dans la methode up les entrees qu'on veut avoir dans la base de donnes.

exemple:

		    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('text');
            $table->mediumText('body');
            $table->string('due');
            $table->timestamps();
        });
    }
	
Sur laravel 5.6, il y a un bug qui nous force a faire cette etape en plus:

Ouvrir app/providers/appserviceprovider et rajouter:

	use Illuminate\Support\Facades\Schema;
	...
	public function boot(){
	Schema::defaultStringLength(191);
	}


Enfin lancer la migration:

	php artisan migrate
	
	
	
## Forms

Pour uiliser les forms dans laravel on a un outil cool

pour l'installer 
	composer require "laravelcollective/html"

Il faut aussi ajouter dans config/app.php:

Providers: Ajouter Collective\Html\HtmlServiceProvider::class
Alias: Ajouter:
		'Form' => Collective\Html\FormFacade::class,
        'Html' => Collective\Html\HtmlFacade::class,


Pour creer ensuite un formulaire:

	{!! Form::open(['action' => 'TodosController@store', 'method' => 'POST']) !!}

  	{!! Form::close() !!}
