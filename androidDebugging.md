# Android Debugging.

link : https://developers.google.com/certification/associate-android-developer/study-guide/debugging

---
## **1.Comprendre les principales techniques de debugging disponibles dans Android Studio**

Dans la fenêtre `Debugger` ont peut voir le panneau `Frames` qui permet d'inspecter la Stack. Cela permet de voir des différents Thread en cours. Cela peut être très utile.

Dans l'ongle Watches, on peut ajouter une variable a surveiller en cliquant sur le "+".

---
## **2.Savoir débugger and fixer le comportement d'une app et son usability.**

Tout d'abord, il faut être sur d'avoir activer le debuggage de l'app. Normalement pour les émulateurs cela devrait être activé par défault, mais ce n'est pas toujours le cas pour le device réel.

Placer des breakpoints et faire ensuite **Maj+F9** pour lancer le debuggage sur l'application.

On peut aussi attacher le debuggur après avoir lancé l'application. Pour cela il suffit d'Attacher le debugger a un process Android. ![deb](./img/android/and12.png)

---
## **3.Être capable d'utiliser les System Log pour faire apparaitre des informations de debuggage.**

Pour loger des message on peut utiliser `Log`.
La bonne pratique est d'utiliser le TAG en tant que nom de classe comme ceci:

```java
import android.util.Log;
...
public class MyActivity extends Activity{
    private static final String TAG = MyActivity.class.getSimpleName); // utilisation du TAG
    ...
    @Override
    public void onCreate(Bundle savedInstanceState){
        ...
        if(savedInstanceState != null){
            Log.d(TAG, "onCreate() restoring previous state ");
            /* restore state */
        }else{
            Log.d(TAG, "onCreate() no saved state");
            /* initialize app */
        }
    }
}
```

Les différentes tags de Log sont:
- Log.e => error
- Log.w => warning
- Log.i => information
- Log.d => debug
- Log.v => verbose

---
## **4.Comprendre les breakpoints dans Android Studio.**

---
## **5.Savoir inspecter les variables dans Android Studio.**
