# GIT essentials

## Commandes


	git init
	git add .
	git commit -m "initial commit"
	
	//pour voir status:
	git status
	
	//pour voir les commits:
	git log
	
	//pour se deplacer sur un commit:
	git checkout <commit number>
	
	//pour se placer sur une branche
	git checkout mybranch
	
	//revenir au dernier commit
	git checkout -- .
	
	//creer une branch
	git checkout -b new-feature
	
	//merger une brache avec le master
	git merge new-feature
	
	//repartir complerement d'un commit
	git reset --hard
	
	//ajouter a un repertoir sur git hub
	git remote add origin <repository URL>
	git remote -v
	
	//updater le procher sur git hub
	git push origin master