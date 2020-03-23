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
Reformater les lignes : `Ctlr + Alt + l`
Faire un élément globla a la classe: `Ctrl + Alt + f`


## Questions

Principaux components ?

- Activities (représent UI)
- Intents ( permet de faire le lien entre les activities et sert aussi a demarrer certaines calls )
- Services ( It is a component that runs in the background to perform long-running operations without interacting with the user and it even works if application is destroyed.)
- Broadcast receivers ( It responds to breoadcast messages from other applications of from the system itself. These messages are sometime called events or intents)
- Content providers (Content providers share data between applications)

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

Implicite et explicite. Implicit intent is when the target component is not definaed in the intent and the android system has to evaluate the registered compoennts based on the intent data.

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
Chaque fragement peut etre manipulé indépendament (les ajouter ou les enlever).

---

What is ListFragment ? How to use it ?

Un fragement qui displsy a list of items by binding to a data source such as an array or Cursor.
It exposes event handlers when the user selects an item.
ListFragment hosts a ListView object qui peut etre lié a des datas.

---

Nommer 4 differents types de Fragment Classes ?

- DialogFragment
- ListFragment
- PreferenceFragment
- Single Frame Fragment

---

What is a Thread ? Is service with thread possible ?

Thread is a dispatchable unit to CPU. Yes service with thread is possible.

---

Define AsyncTask, methods and how to use it ?

AsyncTask is a class to achieve multithreading.
A utiliser pour update l'UI.
Methodes sont :
- onPreExecute
- doInBackground
- onUpdateProgress
- onPostExecute
Les 3 types de parameters sont:
- Params
- Progress
- Result

---

What are Loaders ?

---

What are the options to save data in client device ?

On peut utiliser:
- Shared Preferences
- Internal Storage (SQLite)
- External Storage(Sd card)
- Content Providers
- Storing in Network Server

---

Quel fields peuvent etre storés dans in SQLite Database ?

- null
- integer
- real
- text
- blob

---

Nommer 5 methodes qui aident a arriver vers un cursor object ?

- moveToFirst()
- moveToLast()
- moveToNext()
- moveToPrevious()
- moveToPosition(int position)

---

What is a web service ? What are the common formats to exchange data ?

Web Service application component used to transfer data over the web. Allow businesses to communicate with each other. Promotes interopeerability, flexibility, reusability.
Les formats communs sont XML et JSON

---

Name the methods used to Send Information and Retrieve information ?

HTTP methods like GET, POST, DELETE, PUT, HEAD, CONNECT, OPTIONS

---

How is web service implemented in Android ?

Java.net package provides the API to access the internet. Url and HttpURLConnection sont les principales classes pour l'accès a internet.


---

Write the code fragement which check whether the Android device is connected to the internet or not ?

---

What is Android ?

Mobile OS developed by Google. Concu pour téléphones et devices. Open Source. Written in Java. Android Kernel est basé sur un linux kernel.

---

What is android runtime ?

---

Que signifie APK ?

Android Packaging Kit.


---

What is a singleton class in Android ?

---

What's the difference between a file, a class and an activity in android ?

---

What is Dalvik Virtual Machine ?

---

What are the different kinds of context in Android ?

- this / getActivity()
- getContext()
- getBaseContext()
- getApplicationContext()


---

Define Android application resource files ?

---

What is ADB ?

Android Debug Bridge

---

List and explain the four Java classes related to using sensors on the Android platform ?

- SensorManager
- Sensor
- SensorEvent
- SensorEventListener