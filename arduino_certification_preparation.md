# arduino certification

Topics:

-> Electricity
-> Electronic Components
-> Reading Circuits and schematics
-> Frequency and duty cycle
-> Programming Logic
-> Programming Syntax
-> Arduino IDE
-> Arduino Boards



## Topics hors sujets et questions precises:

Q: What is an actuator:
R: C'est un device qui fait bouger quelque chose, ou active quelque chose. (Dans la question de l'essai il faut repondre le piezo)


## Sujets


1.
2.
3.
4.
5.
6.

### 7.Arduino IDE

Exemple basique de code:

```java

int led = 13;
int button = 1;

void setup(){
    pinMode(led, OUTPUT); // comment
    pinMode(button, INPUT);

}

void loop(){
    digitalWrite(led, HIGH);
    delay(1000);
    digitalWrite(led, LOW);
    delay(1000);
}
```

Lorsqu'on veut faire un digitalRead, il faut connecter la pin de cette facon:
![circuit](/img/ard01.png)
De cette facon, si le circuit n'est pas branché, le courant prends l'embranchement avec le moins de resistance. et donc la pin est reliée au GND (donc 0V). Et si on ferme le contact, la pin est reliée directement au 5V.


### 8.Arduino Boards

Les differences sont dans la capacité mémoire et certaines fonctions. (Entrées sorties et possibilités).

    - Leonardo
    - Uno
    - Mega

    Coeur = ATMEGA328P

    Il y a 3 petites leds integrees L, TX, RX. La led L peut servir directement pour tester le fonctionnement sans avoir besoin de brancher une LED.

    Arduino UNO a en realité 2 controlleurs internes.
    A chaque fois qu'on reset un arduino, le bootloader load 1 premier code, et le 2eme code est execute ensuite.

    USB => |  FTDI chip  | => conversion vers le ATMEGA de facon a ce que le ATMEGA comprennes les instructions
    Le bootloader va faire le lien avec le code stocké, de facon a ce qu'il soit reecrit a chaque fois que l'arduino est reseté.

    Le bootloader doit pouvoir gérer plusieurs protocoles de communication (USB, bluetooth, NFC, ethernet , etc). Et du coup le bootloader devient plus gros, et engendre des risques de bugs.


    Le bootloader, fait un call qui dit : "Copie le code depuis tel source (pour arduino SRAM) dans le program de l'ATMEGA". De cette facon, le code du bootloader est tres simple et donc tres peu de bugs. Il dit juste oú trouver le code et éventuellement quelle taille fait le code.

    Pour résumer:

    USB => stocke dans SRAM
    
    bootloader dit a chaque demarrage: va copier dans le program le code situé dans la SRAM.


=> DigitalPins
    Si activé, il sort 5V, sinon 0V.
    Les pins Digital peuvent seulement fournir ou recevoir 20mA ! (sinon risque de dommages)
    Si on a besoin de faire plus de puissance, il faut utiliser un transistor qui declenchera ou non la coupure du circuit relié à une Alim.
    declenché grace à digitalWrite().
    On peut lire grace a digitalRead().

=> AnalgoPins
    AnalogIn permets de lire des informations analogiques.