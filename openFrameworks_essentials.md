# OpenFrameworks Essentials


## Fonctions géométriques de base

Définition background et couleur:

    ofBackground(0);
    ofSetColor(255);
    ofFill();
    ofNoFill();


Formes basiques:

      ofDrawRectangle(50, 50, 100, 100);
      ofDrawCircle(250, 100, 50);
      ofDrawEllipse(400, 100, 80, 100);
      ofDrawTriangle(500, 150, 50, 600, 150,50);
      ofDrawLine(700, 50, 700, 150);
      ofDrawRectRounded(...);
      ofDrawCurve(...);
      ofDrawBezier(...);

Fonctions dans setup:

    ofSetCircleResolution(50);
    ofEnableAntiAliasing();
    ofDisableAntiAliasing();
    ofSetLineWidth(5);
    ofSetBackgroundAuto(false) //n'efface pas le background à chaque boucle dans draw.
    ofBackground(0);
    ofSetFrameRate(60);
    ofEnableAlphaBlending(); //activer alpha dans les couleurs
    ofDisableAlphaBlending();



Fonctions utiles:

    ofRandom(50,200);
    ofRandom(5);
    ofRandom(ofDegToRad(360.0)) //tire un angle au hasard
    ofMap() // fonctionne comme dans processing.
    ofClamp(v, v0, v1);
    a.distance(b) // calcule la distance Euclidienne entre les points a et b.
    getNormalAtIndexInterpolated(...);
    getTangentAtIndexInterpolated(...);
    ofTranslate(150,0);
    ofRotate(45);
    ofScale(0.5,0.5);
    ofPushMatrix();
    ofPopMatrix();
    ofSetRectMode(OF_RECTMODE_CENTER);
    ofVideoPlayer player; //puis player.loadMovie("movie.mov")
    ofGetFrameRate();
    ofPos += ofGetLastFrameTime() * speed // permet de donner une vitesse fixe quoiqu'il arrive même avec une grosse charge CPU.
    ofGetElapsedTimef();
    ofGetElapsedTimeMillis();
    ofGetFrameNum();
	ofNoise(x), ofNoise(x,y), ofNoise(x,y,z);
    ofToSting(v); // convertit un int ou float a une string.
    ofToInt(s), ofToFloat(s); // convertit une string en un int ou en un float
    ofShowCursor(), ofHideCursor();
    ofSetLineWidth(7);
    ofSetCircleResolution(res);  // res est le nombre de segments;
    ofEnableSmoothing(); ofDisableSmoothing();

    ofColor color = ofColor::red;
    color.setBrightness(10);

    Ecrire dans la console:
        cout << "time: " << ofGetElapsedTimef() << endl;

    Constantes:

    M_TWO_PI = 2 * pi;
    a = b * DEG_TO_RAD;

## Capture d'ecran

    if(key == ''){
        ofImage image;
        
        //grab contents of the screen
        image.grabScreen(0,0, ofGetWidth(), ofGetHeight());
        image.saveImage("screen.png");
        // ou image.saveImage("screen.bmp"); // plus rapide
    }
	


## Détecter un clic basique

      if (ofGetMousePressed(OF_MOUSE_BUTTON_LEFT)) {
        ofSetColor(255);
        ofSetRectMode(OF_RECTMODE_CENTER);
        ofDrawRectangle(ofGetMouseX(), ofGetMouseY(), 50, 50);
      }

## Interpolation entre 2 couleurs

La fonction d'interpolation est .getLerped(a, b).

    ofColor myOrange(255, 132, 0, alpha);
    ofColor myRed(123, 6, 200, alpha);
    ofColor inBetween = myOrange.getLerped(myRed, ofRandom(1.0));
    ofSetColor(inBetween);

## Vecteur

Exemple de vecteur pour tracer un triangle:

    ofVec2f p1(0, 25.0);
    ofVec2f p2(100,0);
    ofVec2f p3(0,-25.0);

Exemple de définition d'un Vecteur mousePos qui récupère les positions de la souris:

    ofVec2f mousePos(ofGetMouseX(), ofGetMouseY());


## Sauvegarder une OpenFrameworks

Ne pas oublier la fonction glReadBuffer(GL_FRONT). In the keyPressed function:

    if(key == 's'){
      glReadBuffer(GL_FRONT); //only needed on window when using ofSetAutoBackground(false)
      ofSaveScreen('savedScreenshot ' + ofGetTimeStampString() + '.png');
    }

La sauvegarde du screenshot est placée dans ./bin/data/ du répertoire du projet.

## Dessiner Polylignes

> Il faut d'abord définir les polylignes dans le fichier ofApp.h

    ofPolyline straightSegmentPolyline;
    ofPolyline curvedSegmentPolyline;
    ofPolyline closedShapePolyline;

> Puis on peut remplir les polylignes dans setup du fichier cpp

    straightSegmentPolyline.addVertex(100,100);
    straightSegmentPolyline.addVertex(...);
    ...
    curvedSegmentPolyline.curveTo(...);
    ...
    closedShapePolyline.addVertex(...);
    ...

> Enfin on peut dessiner pour de vrai les polylignes définies dans draw

    ofBackground(0);
    ofSetLineWidth(2.0);
    ofSetColor(255,100,0);
    straightSegmentPolyline.draw();
    curvedSegmentPolyline.draw();
    closedShapePolyline.draw();

Voir les fonctions arc(...), arcNegative(...) et bezierTo(...) pour d'autres facons de dessiner des polylignes.

Voir la fonction simplify pour simplifier une courbe selon une certaine tolerance. (Voir aussi fonction tolerance()).


## Sauvegarder en pdf

Il faut utiliser une foncion beginSave et EndSave. Il est recommandé de définir une variable isSavingPdf qui est activée losqu'on appuie sur une touche.

    if (isSavingPdf){
      ofBeginSaveScreenAsPDF("savedScreenShot_" + offGetTimestampString()+".pdf");
    }
    ...
    //Drawing code
    ...
    if(isSavingPdf){
      ofEndSaveScreenAsPDF();
      isSavingPDF = false;
    }

## Points

Lorsqu'on utilise des coordonnees, il faut mieux utiliser directement la methode ofPoint directement accessible.

ofPoint p;
    p.x = 100.0;
    p.y = 200.0;

ou p = ofPoint{ 100.0, 200.0 }

    p.length() : retourne longeur du vecteur.
    p.normalize();


## Création de classe

Exemple de création de la classe Ball. Fichier ball.h:

    #ifndef _BALL // if this class hasn't been defined, the program can define it
    #define _BALL // by using this if statement you prevent the class to be called more than once which would confuse the compiler
    #include "ofMain.h" // we need to include this to have a reference to the openFrameworks framework
    class Ball {

        public: // place public functions or variables declarations here

        // methods, equivalent to specific functions of your class objects
        void setup();	// setup method, use this to setup your object's initial state
        void update();  // update method, used to refresh your objects properties
        void draw();    // draw method, this where you'll do the object's drawing

        // variables
        float x;        // position
        float y;
        float speedY;   // speed and direction
        float speedX;
        int dim;        // size
        ofColor color;  // color using ofColor type

        Ball();  // constructor - used to initialize an object, if no properties are passed the program sets them to the default value
        private: // place private functions or variables declarations here
    }; // don't forget the semicolon!
    #endif


Puis le fichier Ball.cpp:

    #include "Ball.h"
    Ball::Ball(){
    }
    void Ball::setup(){
        x = ofRandom(0, ofGetWidth());      // give some random positioning
        y = ofRandom(0, ofGetHeight());
        speedX = ofRandom(-1, 1);           // and random speed and direction
        speedY = ofRandom(-1, 1);
        dim = 20;
        color.set(ofRandom(255),ofRandom(255),ofRandom(255));
    }

    void Ball::update(){
        if(x < 0 ){
            x = 0;
            speedX *= -1;
        } else if(x > ofGetWidth()){
            x = ofGetWidth();
            speedX *= -1;
        }
        if(y < 0 ){
            y = 0;
            speedY *= -1;
        } else if(y > ofGetHeight()){
            y = ofGetHeight();
            speedY *= -1;
        }
        x+=speedX;
        y+=speedY;
    }
    void Ball::draw(){
        ofSetColor(color);
        ofDrawCircle(x, y, dim);
    }

Ensuite inclure Ball.h dans le header ofApp.h

    #include "Ball.h"
    class ofApp : public ofBaseApp{
      public:
      ...
      ...
      Ball myBall;
    }

Enfin dans ofApp.cpp

    dans Setup:
    myBall.setup();
    dans update:
    myBall.update();
    dans draw:
    myBall.draw();


> **Pour définir une array de Balls provenant de cett classe**

Dans ofApp.h, après les include, définir un nombre constant avec #define

    #define NBALLS 10

et déclarer l'array de Balls dans le mème fichier

    Ball groupOfBalls[NBALLS];

enfin dans ofApp.cpp faire les calculs avec cette array

    dans Setup:
    for(int i=0; i<NBALLS; i++){
      groupOfBalls[i].setup();
    }
    et de même dans update et draw:
    ...
    groupOfBalls[i].update() et groupOfBalls[i].draw();


### permettre les variables dans la classe

Dans Ball.h:

    public:
      void setup(float _x, float _y, int _dim);

Dans Ball.cpp:

    void Ball::setup(float _x, float _y, int _dim){
      x= _x;
      y= _y;
      dim = _dim;
    }

Dans ofApp.cpp dans le setup:

    for(int i=0; i<NBALLS; i++){
      int size = (i + 1)*10;
      int randomX = ofRandom(0, ofGetWidth());
      int randomY = ofRandom(0, ofGetHeight());
      groupOfBalls[i].setup(randomX, randomY, size);
    }


### !! Utiliser array de longeur variable d'objets pour les classes

>**Déclarer dans ofApp.h:**

    vector <Ball> groupOfBalls

>**dans ofApp.cpp:**

    dans mouseDragged:
    Ball tempBall; //utilisation d'une Ball temporaire
    tempBall.setup(x,y,ofRandom(10,40));
    groupOfBalls.push_back(tempBall); //stockage de la tempBall dans le vector groupOfBalls

    dans update et draw:
    for(int i=0; i<groupOfBalls.size(); i++){
      groupOfBalls[i].update et groupOfBalls[i].draw();
    }

De cette facon le on génére des Balls à chaque fois qu'on clique ce qui donne une "array" d'objects qui varie sans cesse.


### Méthode complémentaire au précédent chapitre: Ajouter et supprimer en utilisant les vecteurs

Dans notre exemple, on va essayer de faire en sorte de pouvoir supprimer une Ball en cliquant dessus:

    for (int i=0; i< groupOfBalls.size(); i++){
      float distance = ofDist(x,y, groupOfBalls[i].x, groupOfBalls[i].y);
      if(distance < groupOfBalls[i].dim){
        groupOfBalls.erase(groupOfBalls.begin()+i); // méthode pour supprimer
      }
    }

On peut tout aussi tout supprimer avec:

    groupOfBalls.clear();




## Interpolation, animation

Pour une animation on peut utiliser une méthode d'interpolation:

		void rectangle::interpolateByPct(float myPct){
		pos.x = (1-pct) * posa.x + (pct) * posb.x;
		pos.y = (1-pct) * posa.y + (pct) * posb.y;
		}

(voir http://openframeworks.cc/ofBook/chapters/animation.html pour plus d'infos). C'est une méthode qui semble vraiment cool avec différents possibilités mathématiques au niveau du déplacement. Voir aussi les exemples sur https://github.com/openframeworks/ofBook/tree/master/chapters/animation/code. (voir rectangle_interpolate)


## Travailler avec des images

> Déclarer l'image dans le header.

		ofImage myImage;
		
> La définir dans Setup.

		myImage.loadImage("lincoln.png");
		myImage.setImageType(OF_IMAGE_GRAYSCALE);
		
> Utiliser l'image dans draw.

		int imgWidth = myImage.getWidth();
		int imgHeight = myImage.getHeight();
		myImage.draw(10, 10, imgWidth * 10, imgHeight * 10);
	
Note: L'image peut aussi provenir d'une vidéo, on utilise alors ofVideoGrabber. puis ofImage::grabScreen().

Note: on peut aussi charger des images directement depuis internet. Exemple: myImage.loadImage('http://en.wikipedia.org/wiki..../example.jpg');



## Travailler avec une Webcam

Déclarer dans le header: ofVideoGrabber cam;
Dans Setup: cam.setup(320,240) ou cam.initGrabber(320,240);
Dans Update: cam.update();
Dand Draw: cam.draw(0,0);



** A reprendre a experimental game development.