function verificarUsuario (req, res, next){

console.log({usuarioid: req.UsuarioId})
    next();
}

module.exports = verificarUsuario;