const app = require ("./App");
const Loaders = require ("./src/Loaders/index.js");

Loaders.start ();

app.listen(8000, () => console.log("Servidor rodando!"))