# BurpSuite Essentials

## Proxy

Pour intercepter que le traffic voulu, aller dans "target" et ajouter dans "Include in Scope" -> Prefix "http://le-site-a-scanner.com/"
Puis dans proxy -> options activer dans "Intercept Client Requests" "and" URL is in target scope.

On peut après une requête voir la map du site dans l'onglet Target -> Site Map

Dans Options, on peut remplacer facilement l'userAgent par exemple. Cocher par exemple "Emulate Android".
Ctlr+ R = Send to Repeater

Send to Comparer pour voir si changement dans la reponse.
    On peut alors faire Compare by Words ou Compare by Bytes

L'onglet Decoder permet de faire tout un tas d'encodage très utiles. Et de double encode par exemple.