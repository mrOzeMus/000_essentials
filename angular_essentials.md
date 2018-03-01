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

### ngIf

En marquant dans un component:

    template: `
    <h2 *ngIf="false">
    Codevolution
    </h2>
        `
Le component est affiché uniquement si ngIf est true.


### elseBlock

Permet d'afficher un autre Block si la condition est remplie. Ca s'utilise de la manière suivante:


    template: `
      <h2 *ngIf="displayName; else elseBlock">
      Codevolution
      </h2>
      <ng-template #elseBlock>
        <h2>Name is hidden</h2>
      </ng-template>
       `,

Ca permet d'écrire du code de cette facon:

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
    <h2>Codevolution</h2>
    </ng-template>

    <ng-template #elseBlock>
    <h2>hidden</h2>
    </ng-template>
    `,


### ngSwitch

Permet de faire un rendu selon la valeur d'une variable:

      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You picked red color</div>
        <div *ngSwitchCase="'blue'">You picked blue color</div>
        <div *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick again</div>
      </div>
      `,
      styleUrls: ['./test.component.css']
      })
      export class TestComponent implements OnInit {
        public color="blue";

La ligne ngSwitchDefault est rendue si une condition ngSwitchCase est vérifiée.


### ngFor

Pour faire une boucle for :

    template: `

      <div *ngFor="let color of colors; index as i; first as f; last as l">
        <h2>first {{f}} - {{i}} - {{color}} - last {{l}}</h2>
      </div>

      `,
    styleUrls: ['./test.component.css']
    })
    export class TestComponent implements OnInit {
      public colors=['red','blue','green', 'yellow']

On peut binder comme c'est montré ci dessus l'index, la première valeure ou la dernière valeur. On peut aussi binder les éléments pairs ou impairs.


## Component interaction


### Pour passer une info d'un parent à l'enfant:

Pour passer une info a un composant enfant, voici la démanche:

> Dans le html du parent:

    <app-test [parentData]="name"></app-test>

(ici app-test est le composant enfant)

> Dans test component.ts:

    impot {Component, OnInit, Input} from '@angular/core'
    ...
    template:
    `<h2>{{"Hello" + name}}</h2>`
    ...
    export class TestComponent implements OnInit{
      @Input('parentData') public name;
    }
    ...


On voit que le @Input permet de récupérer l'info **parentData** et de la nommer **name** dans ce component.


### Pour passer l'info de l'enfant au parent

> Il faut créer un event **dans l'enfant**:
exemple avec un bouton dans le html de l'enfant:

    <button (click)="fireEvent()">Send event</button>

> Puis déclarer l'output:

    @Output() public childEvent = new EventEmitter();

> Déclarer le méthode fireEvent du boutton:

    fireEvent(){
      this.childEvent.emit('Hey Codevolution')
    }

>Ne pas oublier d'importer les fonctions nécessaires toujours dans l'enfant:

    import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'


>Dans le **parent** déclarer le message = recevoir:

    public message = "";

>Dans le html du **parent**, procéder de cette facon pour récupérer les données:

    <app-test (childEvent)="message=$event"></app-test>



## Pipes

Les pipes sont des espèces de fonctions qui sont la de base pour faire quelques opérations lors de l'affichage des composants dans le html. Quelques exemples:

    template: `
    <h2>{{name}}</h2>
    <h2>{{name | lowercase }}</h2>
    <h2>{{name | uppercase }}</h2>
    <h2>{{message | titlecase }}</h2>
    <h2>{{name | slice:3:5 }}</h2>
    <h2>{{person | json }}</h2>
    <h2>{{5.678 | number: '1.2-3' }}</h2>
    <h2>{{0.25 | percent }}</h2>
    <h2>{{0.25 | currency:'EUR' }}</h2>
    <h2>{{date | date:'short' }}</h2>
      `,
      ...
      public name="Codevolution";
      public message = "Welcome to codevolution"
      public person = {
        "firstName": "John",
        "lastName":"Doe"
      }
      public Date = new Date();

>Voir les documentations si besoin de plus d'infos.


## Passer une info entre components de même niveau.

Pour cela on a besoin d'un truc appelé Service.
Pour le créer:

    ng generate service my-service


Ensuite créer une méthode dans le service.ts qui vient d'être crée:

    import { Injectable } from '@angular/core';

    @Injectable()
    export class EmployeeService {
      constructor() { }
      getEmployees(){
        return[
          {"id":1, "name": "Andrew","age":30},
          {"id":2, "name": "Brandon","age":25},
          {"id":3, "name": "Christina","age":30},
          {"id":4, "name": "Elena","age":28}
        ]
      }
    }

Ensuite les components doivent register au service.

Quand un component register à un service, tous ses enfants y ont accès.
Si on register au niveau du app module tout le monde y a accès.

Donc pour nous, dans le App module.ts, inclure le service dans providers, et l'importer .


    import { EmployeeService } from './employee.service';

et


    @NgModule({
    declarations: [
    AppComponent,
    TestComponent,
    EmployeeDetailComponent
    ],
    imports: [
    BrowserModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
    })


Ensuite il faut définir les dépendances pour chaque component. J'ai pas bien compris encore mais c'est un truc du genre:

    export class TestComponent implements OnInit {

    public employees = []
      constructor(private _employeeService: EmployeeService) { }

      ngOnInit() {
        this.employees = this._employeeService.getEmployees();
      }
}



(voir: https://www.youtube.com/watch?v=69VeYoKzL6I&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=19)


Si je comprends bien tout ca c'est une sorte de Redux...


Le @Injectable dans le Service permet à un Service de récupurer des infos d'un autre Service...


### http


voir ici :
https://www.youtube.com/watch?v=LmIsbzt-S_E&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=21



## Routing

voir ici:
https://www.youtube.com/watch?v=Nehk4tBxD4o&index=23&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
