# Bash scripting Essentials


Commande necessaire pour chaque script:

```
#!/bin/bash
```

Il faudra egalement faire chmod 755 myscript.sh

le 7 signifie acces complet // pour l'utilisateur
le 5 signifie seulement read execute // pour les autres utilisateurs

## Exemple de script:

```
#!/bin/bash

# Declaration variable
myName="Morgan"

# Declaration constante
declare -r NUM1=5

num2=4
num3= $((NUM1+num2)) # le $ est necessaire pour faire l'operation arithmetique
num4= $((NUM1*num2))

echo " 5+ 4 = $num3"
i += 2
rand = 5
let rand += 4
echo "$rand"
echo "rand++ = $((rand++))"


num9=$(python -c "print $num2+$num3")
echo $num9


cat<< END
This text
pints on
many lines
END

```


## Definir une function

```
getDate(){
	date

	return
}

getDate

name="Derek"

###creation variables locales:
demLocal(){
	local name="Paul"
	return
}

demLocal

echo "$name"

### Passage de parametres
getSum(){
	local num3=$1
	local num4=$2
	local sum=$((num3+num4))
	echo $sum
}

num1=5
num2=6

sum=$(getSum num1 num2)
echo "The sum is $sum"


```

## Commandess

Exemple avec une condition if.
ge signifie "greater then".

```
### Permet de stocker une variable demandee par le script
read -p "What is your name ? " name

if [ $age - ge 16 ]
then
	echo "You can drive"
elif [ $age -eq 15 ]
then
	echo "You can drive next year"
else
	echo "You can't drive"
fi

```

On peut aussi faire:
```
if ((num == 10)); then
	echo "your number equals10"
fi

if((num > 10)); then
	echo "It is greater than 10"
else
	echo "it is less then ten"
fi

```



