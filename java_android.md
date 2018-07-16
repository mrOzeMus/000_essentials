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

             public void onClick(View v){
                Intent startIntent = new Intent(getApplicationContext(), SecondActivity.class);
                // show how to pass information to another activity
                startIntent.putExtra("com.example.moi.quicklauncher.SOMETHING", "HELOOWORLD");
                startActivity(startIntent);
            }

            // le block precedent va permettre de passer des donnees a la nouvelle vue. Passage d'informations entre differents components.

Code de la secondActivity:

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

Lancer une activity en dehors de notre app (exemple ici aller sur google):

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

# Infos Supplementaires

> Graddle est le programme qui construit le binaire a partir des fichiers android.
> Pour voir le text du Xml et mieux comprendre l'architecture, cliquer sur text en bas sur ActivityMain.xml

Il faut mieux eviter d'ecrire en dur les champs de texte, il faut mieux les extraire et les mettre en dur dans le fichier string.xml.
Pour cela cliquer sur les 3 points apres le champ desire, et ajouter une ressource. C'est une sorte de lien qui permettra par exemple de faire beaucoup plus facilement des traductions par exemple.
Les champs seront enregistres dans le fichier string.xml

Quoi qu'il arrive quand on met des inputs on recuperera une String , meme si on met un champ uniquement Number.

Faire un log:

    public void onClick(View v){
        Log.i("myTag", msg: "this is the message");
    }

Ca va logger dans la console (logcat) le message. On peut filtrer pour avoir que "info" qui permet de voir que les logs faits avec cette methode.

    Mettre Focus sur un champ par default:
    txtNumber.requestFocus();

Les couleurs (equivalent du css) est stocke dans res > values > styles.xml

Example: creer un nouveau boutton:

           <style name="GreenButton" parent="@android:style/Widget.Button">
                 <item name="android:textColor">#00FF00</item>
          </style>

On peut aussi definir une couleur en bas:

        <color name="green">#00FF00</color>

    Et l'utiliser:

        <item name="android:textColor">@color/green</item>

Donc example:

    <style name="GreenButton" parent="@android:style/Widget.Button">
        <item name="android:textColor">@color/green</item>
        <item name="android:textSize">15dp</item>
        <item name="android:textStyle">italic</item>
        <item name="android:typeface">serif</item>
    </style>

On peut alors appliquer le style a un element par exemple (deconseiller).
Ou bien mettre dans le AppTheme la ligne:

    <item name="android:buttonStyle>@style/GreenButton</item>
