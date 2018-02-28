# Angular essentials (draft)


 installer angular cli.

 nouveau projet:

    ng new my-app
    cd my-app
    ng serve

nouveau component:

    ng component components/user


## Component structure

Créer un nouveau component:

    ng generate component component-name

Stucture d'un component:

    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',  //c'est la balise html
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'code evolution';
    }


>Plusieurs autres facons d'intégrer un component:

    selector: '[test-component]'

    devient en html:
    <div app-test></div>

>ou

    selector: '.test-component'

    devient en html:
    <div class='test-component'></div>


On peut aussi avoir le template et le style directement écrit en ligne dans le fichier source.

    @Component({
      selector: 'app-root',
      template: ... ,
      style: ...
    })


### Définir un Component avec des propriétés


    @Component({
      selector: 'app-test',
      template: `
      <h2>
      Welcome {{name}}
      </h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name }}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}</h2>
      <h2>{{a = 2 + 2}}</h2>  //N'EST PAS POSSIBLE
      `,
      styles: []
    })
    export class TestComponent implements OnInit {
      public name= "Vishwas";
      constructor() { }
      ngOnInit() {      }

      greetUser(){
        return "hello" + this.name;
      }
    }

Il y a une subtilité entre attributs et propriétés.
Attributs sont définis et ne peuvent pas bouger, voir(https://www.youtube.com/watch?v=N8FBmB2jme8&index=6&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ)


### Manipulation de classes

Voir ce lien:
https://www.youtube.com/watch?v=Y6OP-lPJxgs&index=7&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ

    @Component({
    selector: 'app-test',
    template: `
    <h2>
    Welcome {{name}}
    </h2>
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2>
    <h2 [ngClass]="messageClasses">Codeevolution</h2>
    `,
    styles: [`
    .text-success{
    color: green;
    }
    .text-danger{
    color: red;
    }
    .text-special{
    font-style: italic;
    }
    `]
    })
    export class TestComponent implements OnInit {

    public name= "Vishwas";
    public successClass = "text-success"
    public hasError=true;
    public isSpecial = true;
    public messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
    }

    constructor() { }
    ngOnInit() {    }
    }


### Utiliser un bouton et binder les events

(https://www.youtube.com/watch?v=ZfIc1_oj7uM&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=9)

Il faut procéder de la manière suivante

      <button (click)="onClick($event)">Greet</button>

> le $event permet de remonter l'information du Dom à propos du click qui a été fait.

Et déclarer la fonction dans la classe:

    onClick(event){
    console.log(event)
    this.greeting = event.type
    }


### Passer une information entre plusieurs éléments.

Il faut utiliser le symbole #:

Exemple:

    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>

    ...

    logMessage(value){
      console.log(value)
    }

De cette facon le bouton arrive a récupérer l'élément myInput de l'input.


### Two Way Binding

Pour cela, il faut d'abord importer 'FormsModule' dans app.module.ts:

    import { FormsModule } from '@angular/forms'
    ...
    imports:[
    ...,
    FormsModule
    ],

et dans notre component, procéder ainsi:

    <input [(ngModel)]="name" type="text">
    {{name}}

Le ngModel permet de mettre à jour name en tems réel, l'input et le champ name sont toujours synchronisés.
