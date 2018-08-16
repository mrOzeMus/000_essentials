# Make local server linux

samba marche avec /etc/samba/smb.conf

fichiers a partager:
smbshared.conf

sudo smbpasswd -a morgan

Resoudre problemes de firewall: 
sudo ufw allow Samba

sudo service smbd restart