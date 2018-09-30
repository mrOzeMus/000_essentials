# GoLang essentials

(reprendre https://www.youtube.com/watch?v=SqrbIlUwR0U a 18 min)

godoc.org => Liste des packages.

structure:
``` 
go (workspace)
 -bin/
 -src/
  -github.com
    morgan
      -go_project1
        #project files
      -go_project2
        #project files
  -pkg
```

# Basics

Pour voir les details du go path, faire: go env
le go path est l'espace de travail

equivalent de npm install (install un paquet):
```go
go get github.com/aws/aws-sdk-go/aws
```

# Get started

En general, on appelle le fichier principal main.go

En go, on a une main function
Pour lancer un fichier, faire:
```go
go run main.go
```

Pour faire du programme un binaire, faire :
```go
go install
```
Le fichier va apparaitre dans le bin folder.
```go
package main // obligatoire

import "fmt" // paquet pour imprimer des choses sur l'ecran

func main(){
	fmt.Println("Hello world")
}
```

# Datatypes

Types principaux de donnees:
- string
- bool
- int int8 int16 int32 int64
- uint
- byte (alias for uint8)
- rune (alias for int32)
- float32 float64
- complex64 complex128 (pour les nombres tres grand)

```go
var name string = "Morgan"
var age = 37
fmt.Println(name)
```
En Go si on declare une variable, on est **oblige** de l'utiliser.

On peut comme en JS utiliser const pour les variable qui ne bougent pas.