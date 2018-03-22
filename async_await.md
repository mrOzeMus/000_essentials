# Async / Await Essentials


En asynchrone on arrete pas réellement le programme. Tout ce qui est dans les callbacks s'exécute après.



    const fs = require('fs')
    const util = require('util')

//lire un fichier en Synchrone

    console.log(fs.readFileSync('app.js','utf8'));

//en asynchrone.

    fs.readFile('app.js', 'utf8', (err, result) => console.log(result))

//écrire un fichier

    fs.writeFile('1.js', 'a', (err, result)=> {if(err){return console.log(err)}})


//Utilisation des promises
//Il faut rendre les fonctions qu'on utilise en promises

    const readdir= (path, options)=> new Promise((success, failure) =>{
        fs.readdir(path, options, (err, files)=>{
            if(err) return failure(err)
            success(files)
        })
    })

    readdir('./', 'utf8')
        .then((data)=>{
            console.log(data)
        })
        
// le module promisify de util (d ou l'importation) permet de le faire automatiquement et de gérer des cas particulisers

    const readFile = util.promisify(fs.readFile)

    readDirContents = dir => readdir(dir, 'utf8')
        .then((filenames) => Promise.all(filenames.map(filename => readFile(filename, 'utf8'))))
        

    readDirContents('./')
        .then(console.log)
        .catch(console.error)





explications: https://www.youtube.com/watch?v=MKB1YjIDZfU

Très très bonne vidéo:
https://www.youtube.com/watch?v=s6SH72uAn3Q