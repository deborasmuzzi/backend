const { Router } = require ("express");
const UsuarioController = require ("./src/Controllers/UsuarioController.js");
const SessoesController = require("./src/Controllers/SessoesController.js");
const UsuarioValidator = require ("./src/Validators/UsuarioValidator.js");
const SessosesValidator = require ("./src/Validators/SessoesValidator.js");
const AuthController = require ("./src/Controllers/AuthController.js");
const AuthValidator = require ("./src/Validators/AuthValidator.js")
const verificarJwt = require ("./src/Middlewares/verificarJwt.js");
const verificarUsuario = require ("./src/Middlewares/verificarUsuario.js");

const rotas = Router();
//usuario
rotas.post("/usuario", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete(
    "/usuario/:id", 
    verificarJwt,
    verificarUsuario,
    UsuarioValidator.destroy,
    UsuarioController.delete);
rotas.put(
    "/usuario/:id",
    verificarJwt,
    verificarUsuario,
    UsuarioValidator.update,
    UsuarioController.update);

//sessoes
rotas.post("/sessao", 
    verificarJwt,
    verificarUsuario,
    SessosesValidator.create, 
    SessoesController.create);
rotas.get("/sessoes",
    verificarJwt,
    SessoesController.read);
rotas.delete("/sessao/:id_usuario", 
    verificarJwt,
    verificarUsuario,
    SessosesValidator.destroy, 
    SessoesController.delete);
module.exports = rotas;

rotas.post("/login", AuthValidator.login, AuthController.login);