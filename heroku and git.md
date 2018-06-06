# Heroku et git dans le contexte de creation d'une app


## procedure


	git init
	
	git add .
	git commit -am 'initial commit'
	
	
	//HEROKU CLI
	
	heroku login   //si besoin
	
	//creer application
	heroku create
	
	heroku git:remote -a my-project-4920  //voir settings sur le site si doute
	
	
	git push heroku master
	
	heroku logs //voir tous les logs
	
	heroku open
	
	
	
## Fonctions a relancer si modifs:

	git add .
	git commit -am 'message'
	git push heroku master
	
## Variables environnement

Dans Heroku pour modifier les variables d'environnement aller dans les settings du projet.
Configs Vars. -> STRIPE_PUBLISHABLE_KEY   :   ....