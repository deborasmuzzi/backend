const { Router } = require ("express");
const UsuarioController = require ("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const UsuarioValidator = require ("./Validators/UsuarioValidator.js");
const SessosesValidator = require ("./Validators/SessoesValidator.js");

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