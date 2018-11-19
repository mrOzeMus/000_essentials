# Canvas Essentials html 5

Voir la doc sur w3schools pour des exemples et les details pour les differentes functions

## Usage basique

```js
let c = document.getElementById('myCanvas')
let ctx = c.getContext('2d')
ctx.moveTo(30, 30);
ctx.lineTo(200, 40);
ctx.stroke();
```

le stroke est a la fin a chaque fois.

```js
ctx.beginPath()
ctx.arc(100, 100, 20, Math.PI, 2 * Math.PI)
ctx.stroke()
```

insertion de textes

```js
ctx.font = "30px Arial"
ctx.textAlign = "center"
ctx.fillText("hello", 200, 30)
ctx.strokeText("hello", 10, 50)
```

```js
let grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, "red")
grd.addColorStop(1, "white")
```

```js
ctx.fillStyle = grd
ctx.fillRect(10, 10, 150, 80)
```

```js
ctx.fillStyle = "#FF0000"
ctx.fillRect(0, 0, 150, 58)
```