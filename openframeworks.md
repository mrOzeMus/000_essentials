# Open Frameworks

## Principales Fonctions:

	ofSetWindowShape
	ofSetWindowPosition
	ofDrawLine
	ofDrawCircle
	ofDrawRectangle
	ofDrawEllipse
	ofSetColor
	ofVertex
	ofBeginShape
	ofEndShape
	ofGetWidth
	ofGetHeight
	
	ofBackground
	
	ofGetMouseX
	ofGetMouseY
	
	ofDrawBitmapString
	cout << "message in the console" << endl
	
Inserer une image

	//header declaration:
	ofImage image;
	//ofApp:
	
	setup:
	image.load("file.jpg");
	image.draw(0,0,200,200);
	
Charger une font
	
	//header delcaration:
	ofTrueTypeFont myFont;
	
	setup:
	myFont.load("Iron.ttf", 90);
	ofSetColor(255,0,0);
	myFont.drawString("blah blah", 300,300);
	
Charger un son

	//header : ofSoundPlayer drums;
	//setup:
	drums.load("sample.wav");
	drums.setVolume(0.5);
	drums.play();
	drums.setLoop(true);
	drums.setSpeed(0.4);
	
charger video

	//heade : ofVideoPlayer video;
	//setup:
	video.load("myfile.mp4");
	video.setSpeed(0.3);
	//update : video.update();
	//draw : 
	video.draw(0,0, sizeX, sizeY);
	video.play();
	
charger camera

	//header : ofVideoGrabber camera
	//setyp : camera.setup(320,240);
	//update : camera.update();
	//draw : camera.draw(0,0);
	
Creaton d'une classe
	
	click droit ajouter element
	Il va falloir ajouter fichier .h et .cpp 
	!! Attention !! Bien rajouter /src dans le chemin sinon il y aura des soucis
	
	include le .h dans le .cpp
	include ofApp.h dans le .h
	include le .h dans ofApp.h
	
	inserer les elements dnas ofApp.h ( MyClass image)
	void setup(){
	image.setup();
	}
	void.draw(){
	image.draw();
	}
	
	exemple: MyClass.cpp
		#include "MyClass.h"
		void MyClass::setup() {
			image.loadImage("01.jpg");
		}
		void MyClass::draw() {
			image.draw(30, 20, 200,200);
		}
	example: MyClass.h
		#pragma once
		#include "ofMain.h"
		class MyClass {
		public:
			void setup();
			void draw();
			ofImage image;
		};