# Laravel essentials


## Note: Integration avec react

Procedure:

	laravel new myProject
	
	//faire les configs dans fichier host et apache/config/vhost
	
	//rentrer les donnees de la base dans la .env
	
-> Integration react:

	php artisan preset react
	//verifier qu'on utilise reacte dans le fichier webpack.mix
	ajouter aussi au mix pour le live reload:
	
	mix.browserSync('my-domain.dev');
	
	npm install
	
	//dans le vue dans laquelle on veut rendre le composant, prenons welcome.blade.php
	
	si on garde le composant example d'origine, rajouter:
	
	<div id="example"></div>
	
	et le script pour integrer react dans le layout:
	
	<script src="{{mix('js/app.js')}}" ></script>
	
	lancer le serveur npm run watch

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


Note: 
Voir toutes les routes disponibles:

	php artisan route:list


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
	
	
## Authentification

D'abord avoir un projet et avoir un base de donnees de creer.
Ensuite lancer une migration avec php artisan migrate (pour creer les tables user)

Ensuite pour l'authentifiaction, lancer:

	php artisan make:auth
	
Dans app/http/controller/homeController , le 'dashboard' est la classe HomeController.
On peut alors se logger a l'adresse /login et se register a /register.


## Upload d'images

Voir le projet de la formation appele photoshow car il y a des subtilites.
L'image n'est pas stocke dans la base de donnees mais dans un dossier public mais pour pouvoir les utiliser, il faut
creer un lien symlink. 
Egalement il faut modifier le nom des images qu'on upload pour une meilleure gestion.

php artisan storage:link