# Async, await, promises Essentials

Un exemple clair avec fetch:

Utiliser await avec fetch est un peu plus propre:

    async function fetchUsers(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json()
      console.log(data)
    }
