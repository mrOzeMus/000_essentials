# Web Security and tricks

## Vulnerabilities

Une premiere analyse pour detecter les vulnerabilites est de faire un nikto. Se renseigner ensuite sur les differentes vulnerabilites trouvees.

  nikto -h "http://www.morgan-thibert.com" // par exemple

## WebSniffing

Pour cela on peut uitliser tcpdump
exemples:

  sudo tcpdump -i wlp4s0
  sudo tcpdump -A -i wlp4s0 // -A capture en ASCII, plus adapte pour les sites web
  ** voir toutes les interfaces ** :
  tcpdump -D

Du coup il semble possible de 'sniffer' les ports usb et bluetooth

  tcpdump -XX -i wlp4s0 // capture les datas des paquests avec les headers en hex.

  Voir la doc pour les autes options:
    - sauver les paquets dans un fichier
    - lire les paquets captures
    - capturer les paquets d'une addresse ip particuliere
    - capturer seulement les paquets tcp
    - capturer les paquets d'un port specifique
    - capturer les paquets d'une source ip
    - capturer les paquets d'une destination ip


## Outils

    dnsniff
    sslstrip