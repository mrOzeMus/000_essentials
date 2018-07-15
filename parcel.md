# Parcel Crash Course

## Usage

install: npm i -g parcel-bundler

Inserer les scripts en faisant <script src="module1.js"></script>

Parcel se lance avec:

    parcel

La syntaxe import est alors disponible.

Possibile d'ajouter babel si on veut en installant babel-preset-stage-3 par example.
et en creant un .babelrc a la racine.

Si on veut on peut installer react et react-dom.
-> rajoute une div avec une id de root.

dans module1.js

import React from "react"
import ReactDom from "react-dom"

ReactDom.render(<h1>Hi</h1>, document.getElementById('root'))
