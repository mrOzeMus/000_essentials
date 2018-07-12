# Ajax XmlHttpRequest ...



## Exemple requete avec Promise:



    function getData(method, url){
        return new Promise(function(res, rej){
            let xhr = new XMLHttpRequest();
            xhr.open(method, url)
            xhr.onload = function(){
                if(this.status >= 200 && this.status <300){
                    res(xhr.response)
                }
                else{
                    rej({
                        status:this.status,
                        statusText: xhr.statusText
                    })
                }
            }
            xhr.onerror = function(){
                rej({
                    status:this.status,
                    statusText: xhr.statusText
                })
            }
            xhr.send();
        })
    }


    getData('GET', 'https://jsonplaceholder.typicode.com/users')
    .then((data)=>{
        console.log(data)})
        .catch((err)=>console.console.error(err))




## Principe de fonctionnement

Voici le schéma de fonctionnement:

<img src=".\img\ajax\2018-03-22 17_27_42-AJAX Crash Course (Vanilla JavaScript) - YouTube.png">


Il y plein de manières d'utiliser ajax, on va le faire en JS pure.

## XmlHttpRequest(xhr) 

C'est une api qui a la forme d'un objet.
AJAX est utilisé avec JSON ou avec du text.

(Librairies qui peuvent etre utiles:
jQuery, axios, fetch Api, Node Http, superagent, prototype)


Cette méthode fonctionne d'office pour les navigateurs mais **pour nodejs il faut utiliser soit http ou bien utiliser le module xmlhttprequest !!**

Attention: Il faut parfois mieux éviter les fonctions fléchés lorsqu'on bosse avec le DOM, il y a des problèmes avec le this qui ne peut pas binder des objets dynamiques. Se renseigner sur ce problème. 


## Example simple

Via une page html voici le script pour appeler un fichier local:


        document.getElementById('myButton').addEventListener('click', loadText)

    function loadText() {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'text.txt', true)

        xhr.onerror= function(err){
            console.log('Request error', err);
        }
        
        xhr.onprogress = function () {
            console.log('loading in Progress');
        }

        xhr.onload = function () {
            if (this.status == 200) {
                console.log(this.responseText);
                document.getElementById('text').innerHTML= this.responseText
            }
        }
        xhr.send()
    }

La fonction xhr.onprogress permet d'afficher quelque chose pendant le chargement (comme un gif qui se charge)

Autre facon de l'écrire, peut être un peu plus logique pour moi, mais avec des promises:

(Voir ce tuto : https://www.youtube.com/watch?v=uUZxHkcidps)

        let get  = function(url){
            return new Promise((resolve, reject)=>{
                let xhr = new window.XMLHttpRequest()
                xhr.open('GET',url, true)   
                xhr.send()
            
                xhr.onreadystatechange = function(){
                    if(xhr.readyState ===4){
                        if(xhr.status ===200) {
                        resolve(xhr.responseText)
                        }else reject(xhr)
                    }
                }
            })
        }

        get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>console.log(response))
            .catch((err)=> console.error(err))



> Astuce:

Passer un JSON parse sur la réponse si on veut bosser avec un JSON:

    let users = JSON.parse(this.responseText)




A l'occasion il faudra regarder les post request pour voir comment ca marche car c'est une méthode semble t'il bien plus sécurisée.