 fetch("data.json") //permet de chercher un fichier à l'extérieur de app.js
    .then(res=> res.json())
    .then(data=>console.log(JSON.stringify(data)))