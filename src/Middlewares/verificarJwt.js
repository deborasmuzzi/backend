const jwt = require ("jsonwebtoken")

function verificarJwt(req, res, next){
const authHeader = req.headers.authorization || req.header.Authorization;
if(!authHeader)
return res.status(403).json({message: "Header não encontrado!"})

const [bearer, token] = authHeader.split(" ");


if(!/^Bearer$/.test(bearer))
    return res
    .status(403)
    .json({message: "Header de autorização mal formatado"}); 

if(!token)
    return res.status(403).json({message: "JWT token não encontrado"});

jwt.verify(token, process.env.JWT_SECRET, (err, {usuario}) => {
    if(err)
        return res.status(403).json({message: "JWT token é inválido"});

    req.usuarioId = usuario._id;

    next();
});
}

module.exports = verificarJwt;