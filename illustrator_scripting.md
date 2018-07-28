# Illustrator scripting

//forum https://forums.adobe.com/community/illustrator/illustrator_scripting

Le scripting se fait sous un IDE automatiquement installe qui s'appelle ExtendScript Toolkit.

** Synthese du projet **

-> Charge tous les modeles d etuis dans un dropdown
-> Demande quel cartouche on met
-> Formulaire pour rentrer toutes les infos.
-> Demande si on veut creer directement le pdf.

## Set up

Selectionner la source du logiciel (ici illustrator).

Pour la documentation on peut ouvrir l'outil de visualisation object model.

Pour le reste c'est une sorte de javascript.

Une fois le script ecrit on peut soit:

- le lancer depuis ExtendScript
- glisser le fichier script sur illustrator
- faire un raccourci pour le lancer depuis illustrator dans l'onglet File > Script

## Code

    -> En general on va faire au debut :
    doc = app.activeDocument;
    var totalLayers = doc.layers.length;


    $.writeln("my message") // ecrire dans la console
    Window.alert("this is an alert", "windowName");

    var titleGroup = doc.layers.getByName("Title");
    var titleLayer = titleGroup.layers[0];
    titleLayer.textItem.contents = "Hello world";
    alert(titleGroup.name);

### Sauvegarder en jpeg

    function saveJpeg(name){
      var file = new File(doc.path + '/' + name + '.jpg');

      var options = new JPEGSaveOptions();
      options.quality = 10;

      doc.saveAs(file, options, true);
    }

    saveJpeg('hello-world');

### inclure un autre fichier

Pour integrer par exemple un json pour utiliser certaines donnees (exemple json), ajouter au debut du document:

    #include json2.js
    (...)
    var document = app.activeDocument;

    // utiliser un format json pour nos donnees
    var obj = JSON.parse('{"a":2}');
    alert(obj.a);

    //charger un json
    function loadJSON(relPath){
      var script = new File($.fileName);
      var jsonFile = new File(script.path + '/' + relPath);
      jsonFile.open('r');  // r pour reading
      var str = jsonFile.read();
      jsonFile.close();

      return JSON.parse(str);
    }

    On peut ensuite utiliser les donnees dans une fonction main par exemple:

    (function main(){
      var lessons = loadJSON('lessons.json');
      for(var i= 0; i < lessons.length; i++ ){
        var lesson = lesson[i];
        processLesson(lesson);
      }
    })();

    function processLesson(lesson){
      // effective usage and manipulation

    }

### Astuces

    if(app.documents.length > 0){
    doc = app.activeDocument;
      if(!doc.saved){
        Window.alert("this script needs to modify your documents. Please save your works");
      } else{
        Window.alert("you must open at least one document");
      }
    }

    var currentLayer = doc.layers[i];
    currentLayer.visible = true;  // change visibility;
    currentLayer.locked = false;  // unlock

### Code en vrac

    Nouveau document : var myDocument = app.documents.add();

    Inserer une zone de texte:
      var myTextFrame = myDocument.textFrames.add();
      myTextFrame.position = [200,200];
      myTextFrame.contents = "Hello world";

    Obtenir largeur du document et ajuster la largeur d'une zone texte;
      var myDoc = app.activeDocument;
      var docWidth = myDoc.width;
      var frameRef = myDoc.textFrames[0];
      frameRef.width = docWidth;

    Rotation sur un objet:
    myObject.rotate(30, undefined, undefined, true); // les undefines correspondent a des valeurs par defaut facultatives.

    Obtenir tous les objets graphiques du document:
    var myStyles = app.activeDocument.graphicStyles;
    var firstStyle = myStyles[0];
    $.writeln(firstStyle.name);

    Appliquer un style:
    lastStyle.applyTo( app.activeDocument.pageItems[0] );

    Ajouter un layer, une couleur:
    var myLayer = myDoc.layers.add();
    var myColor = new CMYKColor();

    Utiliser la selection en cours (manuelle):
    var selectedObjects = app.activeDocument.selection;

    Creer trace:
    var myDoc = document.add();
    var myLine = myDoc.pathItems.add();
    myLine.stroked = true;
    myLine.setEntirePath([[220,458], [356,200], [100,100]]);

    (ou bien on peut utiliser une methode de dessin relative)
    var myDoc = app.activeDocument;
    var myLine = myDoc.pathItems.add();
    myLine.stroked = true;
    var newPoint = myLine.pathPoints.add();
      newPoint.anchor = [220, 475];
      newPoint.leftDirection = newPoint.anchor;
      newPoint.rightDirection = newPoint.anchor;
      newPoint.poinType = PointType.CORNER;
      ...

    Creation d'un rectangle:
    var myDocument = app.documents.add();
    var artLayer = myDocument.layers.add();
    var rect =artLayer.pathItems.rectangle( 144,144, 72,215);

    Creation d'un polygone:
    var poly = artLayer.polygon( 144,200,54, 7); // le dernier nombre est le nombre de cotes.

    Creation d'une fenetre UI:
    var mainWindow = new Window("palette", "title", undefined);
    var groupOne = mainWindow.add("group", undefined, "groupOne");
    groupOne.orientation = "column";
    groupOne.add("statictext", undefined, "This script will do something");
    var titleName = groupOne.add("edittext", undefined, "title of video");
    var titleDuration = groupOne.add("edittext", undefined, "Duration");
    var groupTwo = mainWindow.add("panel", undefined, "Buttons");
    groupTwo.orientation = "row";
    var startButton = groupTwo.add("button", undefined, "Start");
    var cancelButton = groupTwo.add("button", undefined, "Cancel");
      cancelButton.onClick = function(){
        mainWindow.close();
      }
      startButton.onClick = function(){
        Window.alert("the script will launch");
      }
    mainWindow.show();

    Ouvrir une boite de dialogue:
    var myFile = File.openDialog("choose a file", undefined // filters, false // multiselection);
    // pour plus de details sur les entrees sorties, voir :
    https://www.adobe.com/content/dam/acom/en/devnet/scripting/pdfs/javascript_tools_guide.pdf

    Ouvrir un fichier illustrator externe;
    var visualMaster = File("D:/test.ai");
    if (visualMaster!= null && visualMaster.exists)  {
        illustrator.open(visualMaster);
        var myDoc = app.activeDocument;  // Get a reference to the newly created document
        // manipulate your object based on attributes in the opened visual master file
    }
    else  {
        alert(TemplateName + " not found.");
    }

    Looper dans les documents ouverts:
    myDoc = app.documents[0].name;

### Faire une dropdown List !!!!!:

    var aDoc = app.activeDocument;  
    var AllDocs = app.documents;  
    var actLay = aDoc.activeLayer;  

    if (AllDocs.length > 1) {  
    var itemDoc = null;  
    actLay.copy ();  

    var win = new Window("dialog","Copy the active layer");  
    this.windowRef = win;  
    win.Txt1 = win.add ("statictext", undefined, "Paste in which open document?");  
    win.NewList=win.add ("dropdownlist", undefined, AllDocs);  

    win.NewList.selection = 0;  
    itemDoc = win.NewList.selection.index;  

    win.cancelBtn = win.add("button", undefined, "Abbruch");  
    win.quitBtn = win.add("button", undefined, "Ok");  
    win.defaultElement = win.quitBtn;  
    win.cancelElement = win.cancelBtn;  
    win.quitBtn.onClick = function() {  
    win.close();  
    }  

    win.NewList.onChange= function () {  
        itemDoc = win.NewList.selection.index;  
        return itemDoc;  
        }  

    win.show();  

    app.activeDocument = app.documents[itemDoc];  
    app.activeDocument.paste();  
    app.refresh();  
    } else {  
        alert ("No other documents open")  
        }  

### Copier d'un calque a l'autre

    var destinationLayer = doc2.layers.add();
    doc1.pageItems[0].duplicate(destinationLayer, ElementPlacement.PLACEATBEGINNING);

### Creation d'une nuance

    Les nuances dans illustrator sont en fait des spots, ou des swatchs, j'ai pas bien compris encore.

     var replaceColor = docRef.spots.add();
     replaceColorColor = new CMYKColor();
     replaceColorColor.cyan = 20;
     replaceColorColor.magenta = 12;
     replaceColorColor.yellow = 45;
     replaceColorColor.black = 20;
     replaceColor.name = "Test" + (i+1);
     replaceColor.color = replaceColorColor;
     replaceColor.colorType = ColorModel.SPOT;
     replaceColor.tint = 100;  

    // Selections
    var docRef = app.activeDocument;
    var paths = docRef.pathItems;

    var ncolor = doc.swatches[i].color;
    if(doc.pathItems[i].fillcolor =true){
      doc.pahtItems[i].fillColor =ncolor;
    }

    Obtenir toutes les nuances:
    docRef.swatches.length

    Changer opacity:
    var paths = docRef.pathItems;
    paths[0].opacity = 50;

    Toggle stroke, fill:
    paths[1].filled =true;
    paths[1].stroked = false;

    Changer un path avec une nuance:
    var mycol = docRef.swatches.getByName("myBlue").color;
    paths[0].fillColor = mycol;

### Modifier taille de la zone de travail:

    var mm = 2.834645;

    var doc = app.activeDocument;

    var myVisibleBounds = doc.visibleBounds; //Rect, which is an array;

    myVisibleBounds[0] -= 20*mm; //left coordinate (use negative values to add artboard)  
    myVisibleBounds[1] += 80*mm; //ltop coordinate  
    myVisibleBounds[2] += 20*mm; //right coordinate  
    myVisibleBounds[3] -= 20*mm; //bottom coordinate (use negative values to add artboard)

    doc.artboards[0].artboardRect = myVisibleBounds;

### Group duplicate

    group.duplicate(group.parent, ElementPlacement.PLACEATEND);

    //dupliquer un element:
    var nl = docRef.layers.add();
    ol.pageItems[i].duplicate(nl, ElementPlacement.PLACEATBEGINNING);

### Changer de layer

    var doc = app.activeDocument;
    var mast = doc.layers.add();
    mast.name = 'Master layer';
    for(var i = doc.layers.length-1; i >= 1; i--){
      doc.layers[i].move(mast, ElementPlacement.PLACEATBEGINNING);
    }

### Deplacer une selection

    var mySelection = app.selection;
    for(var i =0; i < mySelection.length; i++){
      mySelection[i].top += 200;
    }

### Execution de commandes logicielles

    app.executeMenuCommand("selectall");  
    app.executeMenuCommand("ungroup");  
    app.executeMenuCommand("outline");  
    app.executeMenuCommand("deselectall");  


    //iterer dans les items
    var nl = docRef.layers.add();
    for (var i =0 ; i< nl.pathItems.length ; i++){
      with(nl.pahtItems[i]){
        fillColor = flatBlack;
      }
      if(stroked == true){
        stroked = false;
      }
    }

### Placement Type

    ElementPlacement.PLACEAFTER
    ElementPlacement.INSIDE
    ElementPlacement.PLACEATBEGINNING

### Deplacer un groupe

    var myLayer = mydoc.layers[0];
    myLayer.groupItems[0].left = 200;

    //on peut renommer le groupe pour mieux comprendre
    myLayer.groupItems[0].name = "group1";
    // ou translate
     myLayer.groupItems[0].translate(200,0);

### Astuces

    app.redraw();
    $.sleep(1000);
    deselection: app.selection = []

### Selection identique fill color

    var myDoc = app.activeDocument;
    var rgbCol = new RGBColor();
    rgbCol.red =29;
    rgbCol.green =29;
    rgbCol.blue =29;
    myDoc.defaultFillColor = rgbCol;
    app.executeMenuCommand("Find Fill Color menu item");

### Changer couleur d'un element

    // attention si dans un groupe j'imagine qu'il faut d'abord selectionner le groupe
    mydoc.pathItems[0].fillColor = d.swatches[12].color;
    mydoc.pathItems[0].strokeColor = d.swatches[2].color;

### Affichage prompt

    exemple:
    var margin = Number(prompt('enter margin', '10'));
