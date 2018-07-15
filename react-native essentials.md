# React Native

## Sans expo

En ligne de commande, apres ouvert l'emulateur dans Android studio

    react-native init myApp
    cd myApp

    react-native start

    //Dans un autre terminal
    react-native run-android

Ca devrait marcher

    Sur l'emulateur, faire Ctlr + M pour activer le hot reloading

Pour avoir une console il y a un petit bug:

    sur l'emulateur activer Enable remote debugging

    ouvrir manuellement : localhost:8081/debugger-ui/
    relancer l'application react-navite run-android

Une autre facon d'avoir les logs et faire dans la console
react-native log-android

## Autre methode

J'ai eu des problemes avec la methode suivante on peut aussi:

    - creer l'app avec create-react-native-app myApp
    	- ouvrir l'emulateur (ou non si on veut voir sur le phone avec expo)
    	- cd myApp
    	- yarn start
