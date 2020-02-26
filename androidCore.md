# AndroidCore

**1. Understand the architecture of Android system**

**2. Basic building blocks of an android app**

**3. build and run Android app**

**4. display simple message popup using Toast or Snackbar**

-> Toast.

Le Toast disparait après un certain temps. La place occupée est automatiquement ajustée à la taille du message. Si le message requiert une réponse, utiliser plutot une notification.

```java
Context context = getApplicationContext(); // nécessité du context
CharSequence text = "Hello toast!";
int duration = Toast.LENGTH_SHORT;

Toast toast = Toast.makeText(context, text, duration);
toast.show();
```

on peut changer la position du toast (par exemple ici la position sera a haut a gauche):
```java
toast.setGravity(Gravity.TOP|Gravity.LEFT, 0,0) // deux derniers parametres sont les offsets en x et y
```

On peut aussi créer son propre toast personnalisé, pour cela il va faloir faire un layout personnalisé exemple `layout/custom_toast.xml`, puis appeler ce layout:
```java
LayoutInflater inflater = getLayoutInflater();

View layout = inflater.inflate(R.layout.custom_toast, (ViewGroup) findViewById(R.id.custom_toast_container));
TextView text = (TextView) layout.findViewById(R.id.text);
text.setText("This is a custom toast");

Toast toast = new Toast(getApplicationContext());
toast.setGravity(Gravity.CENTER_VERTICAL, 0 , 0);
toast.setDuration(Toast.LENGTH_LONG);
toast.setView(layout);
toast.show();
```

-> Snackbar

C'est un peu similaire en plus propre, car bandeau en bas.
Cela est implémenté comme cela:
```java
Snackbar snackbar = Snackbar
    .make( (View) findViewById(R.id.myActivity), "Hello from snackbar", Snackbar.LENGTH_LONG) // on peut uniquement utiliser cela
    .setActionTextColor(Color.RED)
    .setAction("RETRY" , new View.OnClickListener(){
        @Override
        public void onClick(View view){

        }
    });
    snackbar.show();
```






**5. display message outside your app's UI using Notification**

**6. understand how to localize an app**

**7. Schedule a background task using JobScheduler**

