const dotenv = require ("dotenv")
const app = require ("./App");
const Loaders = require ("./src/Loaders/index.js");

dotenv.config();
Loaders.start ();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Servidor rodando!"))
