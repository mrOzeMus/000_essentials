# Chrome debugging And Chrome dev tools




## Dev tools

Ouvrir panneau console : Ctrl + Shift + J
Ouvrir dernier panneau : F12 ou Ctrl + Shift + I
Ouvrir inspection elements : Ctrl + Shift + C

Faire une recherche : Ctrl + F

tuto et tips : https://www.youtube.com/watch?v=FTeE3OrTNoA

## Chrome debugging

console.log()
console.error()
console.warn()

** Timer **
Debuter un timer:
    console.time("timerA")
    console.timeLog("timerA") => donne le temps ecoulé depuis la création de la variable en ms
    alert("have you answered the question"); console.timeLog('timerA');
    console.timeEnd('timerA')


** Trace **
function foo(){
    function bar(){
        console.trace();
    }
    bar();
}
foo();


console.dir(Object); // show all properties and methods of an object
console.table([1,2,3,4]); // meilleure visualisation des arrays ** fonctionne aussi avec les objets **
