// importo express
const express = require('express');
const app = express();

// setto la porta
const PORT = 3000;

app.use(express.static("public"));

const pets = require("./images");
console.log(pets);

app.get("/", (req, res) => {
    res.send("<h1>Qui inserisco del testo<h1>");
});



app.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found !</h1>');
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
});