const app = require ("./App.js");
const Loaders = require ("./Loaders/index.js");

Loaders.start ();

app.listen(8000, () => console.log("Sistema rodando!"));