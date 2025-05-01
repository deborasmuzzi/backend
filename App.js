
const express = require("express");
const rotas = require ("./routes.js");
const cors = require("cors");


const app = express();



app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(rotas);
app.use((req,res) =>{
    res.status(404).json({message: Rota `${req.originalUrl}' nao encontrada`});
})

module.exports = app;

