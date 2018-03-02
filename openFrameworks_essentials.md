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



reprendre a
    Fleeing Triangle Brush: Vectors and Rotations
