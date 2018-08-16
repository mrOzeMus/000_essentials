# Make local server linux

samba marche avec /etc/samba/smb.conf

fichiers a partager:
smbshared.conf

sudo smbpasswd -a morgan

Resoudre problemes de firewall: 
sudo ufw allow Samba


pour changer les folders partages, aller a /etc/samba/smbshared.conf et rajouter les dossiers voulus.

Ensuite relancer samba avec:
    sudo service smbd restart

Puis pour savoir sur quell ip config aller voir sur le pc faire ifconfig et reprendre l'adresse inet 192.168. ...

Sous windows, faire executer et rentrer:

    \\192.168.1.34\

Ca devrait marcher ensuite