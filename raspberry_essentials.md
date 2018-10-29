# Raspberry Essentials

## Prerequis / configuration

D'abord bien faire les sudo apt-get update et upgrade pour avoir le systeme a jour.

Possibilite d'installer facilement processing

## Config

Pour connaitre l'adresse ip du raspberry connecte, faire un coup de:
```cmd 
ifconfig
```

C'est alors l'inet adresse qui apparait en vers le bas.

**configuration du raspberry**
Faire en terminal:
```cmd
sudo raspi-config
```

Pour activer le SSH, aller dans les interfaces options.
Pour se connecter via ssh faire alors juste:

```cmd
ssh pi@192.168.2.2    // il faut mettre l'adresse ip qu'il y avait.
```

De cette facon je peux me connecter au raspberry avec un autre pc. Pour linux la commande ssh fonctionne, pour windows il faut installer un programme qui permet de faire ca. putty configuration.

grdesktop 

Ensuite pour installer un client de bureau virtuel sur le raspberry on va installer xrdp.
Pour une raison inconnue, des fois il faut faire cette commande avant de resinstaller:

```cmd
sudo apt-get remove xrdp vnc4server tightvncserver
sudo apt-get install tightvncserver
sudo apt-get install xrdp
```

On peut se connecter aussi avec windows, en faisant simplement une connection a distance, indiquer l'adresse ip du raspberry et login et password.( Connecxion bureau a distance)


## Creation d'un web server

Prerequis,
Il est conseille d'adapter la memoire GPU pour faire un web server, par defaut dans le raspberry, elle est a 64, on peut largement la baisser a 16.
(ca se passe dans sudo raspi-config )

```cmd
sudo rpi-update
sudo apt-get install apache2 php libapache2-mod-php
sudo apt-get install mysql-server mysql-client php-mysql
sudo service apache2 restart
```

```cmd
sudo vi /var/www/html/phpinfo.php
```

et rentrer dans le fichier:

```php
<?php
phpinfo();
?>
```

Ensuite on peut acceder au site web sur n'importe quel pc du reseau en tapant dans l'adresse:
192.168.x.x/phpinfo.php  // etant l'adresse ip du raspberry


## Programmer GPIO (led)

voir https://www.youtube.com/watch?v=kqJ8WYQu68w
premier programme pour allumer une led.
Voir la video pour les branchements.

voici le programme a lancer en python:

```python
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

GPIO.output(18, GPIO.HIGH)
time.sleep(2)
GPIO.output(18, GPIO.LOW)
GPIO.cleanup()
```


```