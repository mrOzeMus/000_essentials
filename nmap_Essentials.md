# NMAP Essentials

## commandes basiques

### Scan des apareils sur un reseau

D'abord il faut connaitre son adresse ip, pour ca faire un ifconfig
Ensuite faire:
```
nmap -sP 192.168.0.*  //ici remplacer l'adresse ip par celle qu'on a eu dans le ifconfig sans le dernier chiffre remplace par *.
```

Pour voir les ports ouverts sur un host faire:
```
nmap -sS 192.168.0.12  //remplacer par l'adresse ip
```

Si on veut pas se faire remarquer lors du scan il faut faire
```
nmap -sP 192.168.0.12
```

Si on veut plus de details sur les servers qu'on scanne on peut faire:
```
nmap -sV 192.168.0.12
```
Ca permet de voir les versions utilisees et donc de rechercher des vulnerabilites sur les ports.
Voir les systemes d'exploitation:

```
nmap -O 192.168.0.12
```


### Options de discretion

-D : decoy permet d'utiliser des adresses ip pour faire diversion
-S : usurpation d'adresse IP

--sc : utilisation des scripts
--tracerroute

## Remarques

Nmap est un scanner tres bruyant, les servers et les firewalls voient bien qu'on est en train de faire un scan avec nmap, mais il y a moyen de le faire plus anonymement.

```
nmap -v -A scanme.nmap.org //scann en donnant l'OS et la version
nmap -v -sn 192.168.0.0/16 10.0.0.0/8
```

Pour connaitre les adresses ips par pays, faire une recherches major ip block sur internet.
=> Ca permet de trouver les ranges pour chaque pays.
on peut ensuite chercher directement les adresses ip dans google en faisant who is 'ip adress'.

Pour avoir l'adresse ip d'un site,
on peut faire nslookup scanme.nmap.org

Pour sauvegarder les scans dans un fichier, on peut faire:
```
nslookup 45.33.32.156 >> ~/results.txt
```

Pour scanner les ports generalement les plus interessantes, faire
```
nmap -F scanme.nmap.org
```
