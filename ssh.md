# Lear SSH

## Intro

Secure Shell
Communication Protocol (comme http, ftp, https , etc...)
Traffic is encrypted
Utilise principalement en terminal / commandline.

Methodes d'identifiaction :

- Password
- Public / Private key pair
- host based

Generation de keys
-> ssh-keygen

- ~/.ssh/id_rsa (Private key)
- ~/.ssh/id_rsa.pub (Public key)
- public key goes into server "authorized_keyz" file

SSH est basiquement linux / apple .
Maintenant windows peut utiliser ssh, mais c'est un peu galere.
Le plus simple est d'utiliser git bash.
