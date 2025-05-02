
const express = require("express");
const rotas = require ("./routes.js");
const cors = require("cors");


const app = express();



app.use(express.json());
app.use(rotas);


module.exports = app;
