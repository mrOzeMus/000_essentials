# JAVA Crash Course

## Notions de base:

    public class HelloWorld
    {
        public static void main(Sting[] args)
        {
            System.out.println("Hello world");
        }
    }


* Inheritance: super() permet de fournir a une class à l'intérieur d'une autre toutes les propriétés.
* Imprimer sur l'écran : System.out.println


## Netbeans

Fichier : Nouvelle Application Java
Fonction principale dans void main.

    F6 : Build

### Fenetre d'interface

    Faire click droit sur le projet, new JFrame.

    A partir de la, creer un champ texte, changer sa valeur dans la fenetre proprietes.
    Pour changer le nom de la variable, aller dans l'onglet Code.

    Ajouter des bouttons et des text Field.
    Les champs importants sont variableName et Text.

    Double cliques sur un bouton pour editer l'action par exemple.
    jTxtDisplay.getText() : obtenir la valeur
    jTxtDisplay.setText('value') : determiner la valeur

### Ajouter librairie

    Click droit sur le projet > Proprietes.
    Libraries > Add Library > Create. > Selectionner le fichier jar de la librarie (par exemple telecharge sur le net)

    Il faudra importer la librairie. Dans NetBeans ca peut se faire tres facilement en faisant un click sur l'erreur.

### Creer executable

    Une fois le projet ouvert, clicker sur run > Clean and build project
    La console va afficher quelque chose du genre:
        java -jar "D:\codeJava\Caulculator\dist\Caulculator.jar"
    Cette commande permet de lancer le programme depuis une cli. (ok pas mal)

    Pour faire un exec il faut wrapper l'executable dans un truc appele JSmooth 
    Voir cette video pour faire l' exe a partir du jar.
    https://www.youtube.com/watch?v=hiaz3sHoNb4


### Application PDFBox

    String filename = "pdfName.pdf";
    try{
        PDDocument doc = new PDDocuemnt();
        PDPage page = new PDPage();
        doc.addPage(page);
        PDPageContentStream content = new PDPageContentStream(doc, page);

        PDFont font = PDType1Font.HELVETICA_BOLD;
        content.beginText();
        content.setFont(font, 12);
        content.newLineAtOffset(100,224);
        content.showText("Hello world");
        content.endText();
        content.close();

        doc.save(filename);
        doc.close();

    }


    Charger Document : 
    File file1 = new File("D:/1.pdf");
    PDDocument document = PDDocument.load(file1);