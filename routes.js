const { Router } = require ("express");
const UsuarioController = require ("./src/Controllers/UsuarioController.js");
const SessoesController = require("./src/Controllers/SessoesController.js");
const UsuarioValidator = require ("./src/Validators/UsuarioValidator.js");
const SessosesValidator = require ("./src/Validators/SessoesValidator.js");
const AuthController = require ("./src/Controllers/AuthController.js");
const AuthValidator = require ("./src/Validators/AuthValidator.js")
const verificarJwt = require ("./src/Middlewares/verificarJwt.js");

const rotas = Router();
//usuario
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', verificarJwt, UsuarioController.read);
rotas.delete(
    '/usuarios/:id', 
    verificarJwt,
    UsuarioValidator.destroy,
    UsuarioController.delete);
rotas.put(
    '/usuarios/:id',
    verificarJwt,
    UsuarioValidator.update,
    UsuarioController.update);

//sessoes
rotas.post('/sessoes', 
    verificarJwt,
    SessosesValidator.create, 
    SessoesController.create);
rotas.get('/sessoes',
    verificarJwt,
    SessoesController.read);
rotas.delete('/sessoes/:id_usuario', 
    verificarJwt,
    SessosesValidator.destroy, 
    SessoesController.delete);
module.exports = rotas;

rotas.post('/login', AuthValidator.login, AuthController.login);