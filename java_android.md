# Java AndroidStudio

## Creation nouveau projet

activity.xml : preview de l'app
MainActivity : code

Important !! A chaque nouveau projet, pour avoir les auto imports, il faut recocher dans preferences, editor, general => optimize imports on the fly. A faire a chaque nouveau projet.

### Structure

(onglet gauche)
En general, on veut rester sous l'onglet Android.
3 dossiers:

- manifest
- java : code de l'application (avec la classe mainActivity)
- res : ressources. On va trouver le layout par exemple. Dans values, il y a les donnes de l'application comme le nom.

Commencer par placer des elements de l'interface sous l'editeur activityMain.
Faire en sorte de contraindre l'emplacement des elements.
Pour changer le type de donnees, changer dans inputType.

hint : text de la tooltip

Pour changer les tailles des textes, utiliser sp comme unite a la place des pixels, c'est beaucoup plus universel.

Quand on est pret cliquer sur play.
L'application devrait se lancer normallement.

## Code

le debut du code va se mettre en dessous de setContentView.

Methodes utiles:

findViewById(R.id.addBtn) // R veut dire chercher parmis nos ressources.
setOnClickListerner // equivalent addEventListener

exemple de code pour une simple addition:
**Création de onClick Listener:**

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button addBtn = (Button) findViewById(R.id.addBtn);
        addBtn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                EditText firstNumEditText = (EditText) findViewById(R.id.firstNumEditText);
                EditText secondNumEditText = (EditText) findViewById(R.id.secondNumEditText);
                TextView resultTextView = (TextView) findViewById(R.id.resultTextView);

                int num1 = Integer.parseInt(firstNumEditText.getText().toString());
                int num2 = Integer.parseInt(secondNumEditText.getText().toString());
                int result = num1 + num2;

                resultTextView.setText(result + "");
            }
        });
    }
}
```

Si on veut déplacer la méthode Listener a part pour plus d'organisation et de clareté dans le code, on peut faire:

```java
public class MainActivity extends AppCompatActivity{
    Button btnBefore;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnBefore = findViewById(R.id.button);
        btnBefore.setOnClickListener(btnBeforeListener);
    }

    // ce qui se passe dans le listener est maintenant en dehors de onCreate.
    private View.OnClickListener btnBeforeListener = new View.OnClickListener(){
        @Override
        public void onClick(View v){
            Log.e("DEBUG" , "Button clicked");
        }
    };
}

```

## Debugging

Pour debugger ne pas hesiter a mettre des points d'arret et a lancer en mode debugger.

Permet ensuite d'executer l'application ligne par ligne.

Elements de base d'android dev

Activity : Une zone rectangulaire qui display quelquechose.
Intent : Action que le device va performer
IntentService : Services qui vont etre utiliser pour realiser l'intent demandee par l'app.
BroadcastReceivers :

Pour Creer une nouvelle classe Activity,
click droit sur java > com.examples.moi ... new > Activity
On peut alors voir la nouvelle vue acivitySecond.xml.

## Creation d'une intent

```java
public void onClick(View v){
    Intent startIntent = new Intent(getApplicationContext(), SecondActivity.class);
    // show how to pass information to another activity
    startIntent.putExtra("com.example.moi.quicklauncher.SOMETHING", "HELOOWORLD");
    startActivity(startIntent);
}

// le block precedent va permettre de passer des donnees a la nouvelle vue. Passage d'informations entre differents components.
```

Code de la secondActivity:

```java
public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        if(getIntent().hasExtra("com.example.moi.quicklauncher.SOMETHING")){
            TextView tv = (TextView) findViewById(R.id.textView);
            String text = getIntent().getExtras().getString("com.example.moi.quicklauncher.SOMETHING");
            tv.setText(text);
        }
    }
}
```

Lancer une activity en dehors de notre app (exemple ici aller sur google):

```java
Button googleBtn = (Button) findViewById(R.id.googleBtn);
googleBtn.setOnClickListener(new View.OnClickListener(){
    @Override
    public void onClick(View v){
        String google = "http://www.google.com";
        Uri webaddress = Uri.parse(google);
        Intent gotoGoogle = new Intent(Intent.ACTION_VIEW, webaddress);
        if (gotoGoogle.resolveActivity(getPackageManager()) != null) {
            startActivity(gotoGoogle);
        }
    }
});
```

# Infos Supplementaires

> Graddle est le programme qui construit le binaire a partir des fichiers android.
> Pour voir le text du Xml et mieux comprendre l'architecture, cliquer sur text en bas sur ActivityMain.xml

Il faut mieux eviter d'ecrire en dur les champs de texte, il faut mieux les extraire et les mettre en dur dans le fichier string.xml.
Pour cela cliquer sur les 3 points apres le champ desire, et ajouter une ressource. C'est une sorte de lien qui permettra par exemple de faire beaucoup plus facilement des traductions par exemple.
Les champs seront enregistres dans le fichier string.xml

Quoi qu'il arrive quand on met des inputs on recuperera une String , meme si on met un champ uniquement Number.

Faire un log:

```java
    public void onClick(View v){
        Log.i("myTag", msg: "this is the message");
    }
```

Ca va logger dans la console (logcat) le message. On peut filtrer pour avoir que "info" qui permet de voir que les logs faits avec cette methode.

Mettre Focus sur un champ par default: `txtNumber.requestFocus();`

Les couleurs (equivalent du css) est stocke dans res > values > styles.xml

Example: creer un nouveau boutton:

```xml
    <style name="GreenButton" parent="@android:style/Widget.Button">
            <item name="android:textColor">#00FF00</item>
    </style>
```

On peut aussi definir une couleur en bas:

```xml
<color name="green">#00FF00</color>
<!-- Et l'utiliser: -->
<item name="android:textColor">@color/green</item>
```

Donc example:

```xml
    <style name="GreenButton" parent="@android:style/Widget.Button">
        <item name="android:textColor">@color/green</item>
        <item name="android:textSize">15dp</item>
        <item name="android:textStyle">italic</item>
        <item name="android:typeface">serif</item>
    </style>
```

On peut alors appliquer le style a un element par exemple (deconseiller).
Ou bien mettre dans le AppTheme la ligne:

  `<item name="android:buttonStyle>@style/GreenButton</item>`

## Integration d'images

Les images sont a mettre dans res > drawable.

## Ajouter Menu

Click droit sur res > new > ressource d'activite. Donner un nom et choisir menu dans le menu deroulant.

Creation du menu dans main_menu.xml par exemple:

```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">

    <item android:id="@+id/menu_other"
        android:orderInCategory="100"
        app:showAsAction="never"
        android:title="Other item" />

    <item android:id="@+id/menu_settings"
        android:orderInCategory="100"
        app:showAsAction="never"
        android:title="settings" />
</menu>
```

Et dans mainActivity.java :

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch( item.getItemId()){
            case R.id.menu_other:
                Toast.makeText(this, "other menu selected", Toast.LENGTH_LONG).show();
                return true;
            case R.id.menu_settings:
                Toast.makeText(this, "Settings menu selected", Toast.LENGTH_LONG).show();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }
}
```

# Ajouter librairies exterieur au projet

Pour cela, il faut faire file > Project Structure > Dependencies > Add et chercher la librairie voulue.
Exemple avec geolocalisation chercher com.google.gson etc...


# Ajouter une video

Il faut ajouter d'abord un widget `VideoView` dans le xml, et il suffit ensuite de faire:

```java
private VideoView videoView;

@Override
protected void onCreate(Bundle savedInstanceState){
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    videoView = findViewById(R.id.videoView);
    Uri uri = Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.demo);
    videoView.setVideoURI(uri);
}

@Override
protected void onResume(){
    super.onResume();
    videoView.start();
}

@Override
protected void onPause(){
    super.onPause();
    videoView.pause();
}
```

***Attention***: Tous les types de fichiers vidéos ne sont pas pris en charge, les fichiers supportés sont dans la doc, le standard est les fichiers .webm .


# Démarrer une Activity depuis une autre Activity

dans MainActivity:

```java
public class MainActivity extends AppCompatActivity {

    private final static int SECOND_CALL_ID = 1234;
    private EditText txtInputData;
    private Button btnOpenActivity;
    private TextView lblResultText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtInputData = findViewById(R.id.txtInputData);
        btnOpenActivity=findViewById(R.id.btnOpenActivity);
        lblResultText =findViewById(R.id.lblResult);

        btnOpenActivity.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ActivitySecond.class);
                intent.putExtra("message", txtInputData.getText().toString());
                startActivityForResult(intent, SECOND_CALL_ID);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == SECOND_CALL_ID){
            lblResultText.setText("Result == "+ resultCode);
        }
    }
}
```

et dans la 2eme activity:

```java
public class ActivitySecond extends AppCompatActivity {

    private TextView lblInputData;
    private Button btnClose;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        lblInputData = findViewById(R.id.lblInputData);
        btnClose= findViewById(R.id.btnClose);

        String inputData = this.getIntent().getExtras().getString("message");
        lblInputData.setText(inputData);

        btnClose.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                setResult(33);
                finish();
            }
        });
    }
}
```