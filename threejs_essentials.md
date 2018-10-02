# ThreeJs Essentials

Pour le setup on va utiliser watchify de browserify

# Setup

> index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    body {
      margin: 0;
    }

    canvas {
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <script src="bundle.js"></script>
</body>

</html> 
```

> main.js

Ce sera le fichier qui contiendra le code js avec three

> Utilisation

Pour lancer en mode watch, faire:
```cmd
watchify main.js -o bundle.js --debug --verbose
```

## Get started
Voici un setup de base pour commencer:
```js
let THREE = require('three');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 75 est le fov, parametre suivant est l'aspect ratio (garder toujours ca), 0.1 et 1000 sont les limites near and far clipping panes

let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
//va determiner la resolution si on baisse a width/2, height/2 par exemple
//le canvas sera lui toujours a 100%

// creation du canvas
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

  update()
  render()
}

function update(){
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

}

function render(){
	renderer.render(scene, camera);
}

animate();
```

## Controls

Pour ajouter des controles, aller voir sur le site three js les examples et en choisir un,
Pour le code, le prendre depuis la source, ou mieux, depuis github.
https://github.com/mrdoob/three.js/tree/master/examples/js/controls

l'exemple le plus simple a implementer est le orbitcontrols.js par exemple.