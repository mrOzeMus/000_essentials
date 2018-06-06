# PowerShell


## intro

Power shell est un outil de scripting pour windows.

continuer ici:
https://www.youtube.com/watch?v=QuLxJRT3Mhg

## Commands

	Start-Transcript  //enregistre tout ce qui s'est passe dans la session
	Get-Command
	Get-Command -Noun service
	get-service
	get-help Get-Service -Examples
	get-help Get-Service -Online
	
	get-alias cls
	get-process //actuels process
	get-process -Name firefox    affiches les process en cours
	
	Get-Process -Name firefox | Get-Member   //montre les proprietes associees a l'objet
	
	Get-Process -Name firefox | Select-Object *   //donne d'autres informations encore
	
	creer une variable:
	
	$zebra = Get-Process Firefox
	$zebra.kill()
	
	
	get-psdrive
	get-alias ?  //liste quelques fonctions logiques

	//liste des lecteurs physiqes avec espace libre superieur a 1 (gt greater than)
	get-PSdrive | where-object {$_.free -gt 1}
	
	//meilleure affichage des donnees
	get-PSdrive | where-object {$_.free -gt 1} | Select-Object *


	get-PSdrive | where-object {$_.free -gt 1} | Select-Object *	
	
	
	get-PSdrive | where-object {$_.free -gt 1} | Foreach-object { Write-Host "free space for " $_.root "is" $_.Free -foregroundcolor Red }
	
	//conversion pour affichage en gigas. (1gb est supporte)
	get-PSdrive | where-object {$_.free -gt 1} | Foreach-object { Write-Host "free space for " $_.root "is" ($_.Free/1gb) -foregroundcolor Red }