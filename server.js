// importo express
const express = require('express');
const server = express();

//importo posts.js
const posts = require('./db/posts.js')

// setto la porta
const PORT = 3000;

// console.log(posts);

server.use(express.static("public"));

// specializzo il server a rispondere alla richiesta GET
server.get("/", (req, res) => {
    res.send("<h1>Server del mio Blog</h1>");
});

// query - bacheca?tag=dolci&filter=100&start=10
// params - bacheca/dolci/100/10

server.get("/bacheca", (req, res) => {
    console.log(res.posts);

    const responseObject = {
        lunghezza: posts.length,
        posts
    }

    res.json(responseObject);
});

server.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found !</h1>');
})


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
});