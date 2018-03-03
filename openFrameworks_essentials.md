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
    a.distance(b) // calcule la distance Euclidienne entre les points a et b.
    getNormalAtIndexInterpolated(...);
    getTangentAtIndexInterpolated(...);



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
