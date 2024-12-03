// importo express
const express = require('express');
const server = express();

// setto la porta
const PORT = 3000;

server.use(express.static("public"));

server.get("/", (req, res) => {
    res.send("<h1>Server del mio Blog<h1>");
});



server.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found !</h1>');
})


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
});