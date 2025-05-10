const { Router } = require ("express");
const UsuarioController = require ("./src/Controllers/UsuarioController.js");
const SessoesController = require("./src/Controllers/SessoesController.js");
const UsuarioValidator = require ("./src/Validators/UsuarioValidator.js");
const SessosesValidator = require ("./src/Validators/SessoesValidator.js");

const rotas = Router();
//usuario
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id',  UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioController.update);
//sessoes
rotas.post('/sessoes', SessosesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id', SessosesValidator.destroy, SessoesController.delete);
module.exports = rotas;