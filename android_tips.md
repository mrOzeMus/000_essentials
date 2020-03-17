# Android tips

## Testing

Générer un test: `Alt + insert` dans la classe de test
Ouvrir une fenetre avec un numéro: `Alt + {num}`
Fermer une fenetre en cours: `Shift + Esc`
Rouvrir la derniere fenetre : `F12`
Toggle mode max/normal : `Shift + Ctrl + F12`
pour ouvrir deuxieme fichier : `Shift + shift => split`
pour fermer : `Shift + Shift => unsplit`
ouvrir javadoc d'une methode : `Ctrl + q`
toggle entre les parameters : `Ctrl + p`
code completion: `Ctrl + space`
Meilleure code completion (plus intelligente):  `Ctrl + shift + space`
Return to definition : `Ctrl + b`
Surround with : `Ctrl + Alt + t`
zommer dans le layout editor: `Ctrl + shift + "+"`
pour utiliser une image par defaut pour prototypage: `src: @tools:sample/avatars ou src: @tools:sample/scenic_backgrounds` egalement /lorem et /full_names


## Questions

Principaux components ?

- Activities (représent UI)
- Intents ( permet de faire le lien entre les activities et sert aussi a demarrer certaines calls )
- Services ( services faits en arriere plan comme un telechargement oui la planification d 'un event)
- Broadcast receivers
- Content providers ( pour l'échange de données entre plusieurs applications )

---

Comment Android System sait quel layout file doit être affiché ?

Android va chercher dans le `manifest` l'activity qui doit être lancée:
manifest.xml => intent-filter [action=main] => Activity [OnCreate] => setContentView => layout file to inflate

---
Lister quelques caractéristiques d'une Activity:

Une activity est toujours associée a une UI.
Deux UI ne peuvent pas avoir la même activity
Activity a son propre cycle de vie

---

Que sont les Intents ?

Facilite la comminication entre les components. Il y 3 cas d'usage typiques:
- Start an Activity
- Start a Service
- Delivering a Broadcast

Quelles sont les types d'Intents ?

Implicite et explicite. Les explicite intents permettent de passer des extra datas dans l'intent.

--- 
Expliquer le but et la structure du manifest file

Donnes les informations essentielles pour le system Android nécessaire avant de générer l'application. Utilise par exemple minSdkVersion, les permissions a utiliser. Dis aussi quelle icone utilisr, le nom, le thime, etc. Register les activities qui seront utilisées, mais aussi les services, etc

---
Qu'est ce que c'est exactement les MaterialDesign ?

Introduit avec la version Lollipop

Ce sont des widgets, des themes Material, custom shadows , vector drawable et custom animation.
Permet d'avoir une UX positive et naturelle. C'est utilisé par le plupart des devices, meme montre, etc. Donne des guidelines générales qui sont considérées comme un standard.

---

How to implement Material Design ?

En utilisatn Color Customization. utiliser les themes, les styles... Définir les styles dans un fichier a part etc.

---

Expliquer le fonctionnement d'un RecyclerView, d'une List, ou d'une CardView.

---

What is Floating Action Button ?

---

Différences entre SnackBar et Toast ?

---

Que sont les Fragments ? Quelles différences avec Activity ?

Les Fragements sont une portion d'UI dans une Activity. Permet de faire des réusable components. Une activity peut avoir plusieurs fragements. Les fragments doivent etre indépendants pour pouvoir être réutilisables.

---

Comment sont crées les Fragments ?

Soit Statiquement (dans layout.xml), ou soit Dynamiquement en utilisant le Fragment Manager.

---

Expliquer le Lifecycle methods des Fragments ?

Un fragment doit être intégré dans une Activity et son cycle de vie est dépendant du cycle de vie de son Activity.
