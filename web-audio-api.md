# Web audi API Essentials


## Basic Setups Audio

### Loading a file
On va charger un html avec un script basique, mais pour servir le fichier audio ne pas oublier de le mettre sur le serveur, ou de le distribuer avec la commande suivante par example:
tuto utile: 'https://middleearmedia.com/web-audio-api-bufferloader/'
Si on veut utiliser une librairie toute faite, on peut utiliser **Howler.js**


```cmd
parcel index.html sound.wav
```

Setup basic du fichier js:

```js
let context;
context = new AudioContext();

function loadSound() {
	request = new XMLHttpRequest();
	request.open('GET', './sound.wav', true);
  request.responseType = 'arraybuffer';

	request.onload = function() {
		context.decodeAudioData(request.response, function(buffer) {
			let audioBuffer = buffer;
			console.log(audioBuffer);
			if (audioBuffer) {
				let source = context.createBufferSource();
				source.buffer = audioBuffer;
				source.connect(context.destination);
				source.start(0);
				console.log('playing');
			}
		});
  };

	request.send();
}
loadSound();
```

Le code est a optimiser pour ne pas avoir a reloader le buffer a chaque fois, mais ca fonctionne ainsi.
**Attention** : Voir pour quelque chose qui marche avec tous les navigateurs, car ici AudioContext est le context de chrome. Pour firefox ce sera webkitAudioContext.
