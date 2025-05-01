const UsuarioModel = require("../Models/UsuarioModel.js");

class UsuarioController {
   async create(req, res){   
       const usuario = await UsuarioModel.create(req.body);
        return res.status(200).json(usuario);
    }
    update(req, res){ 
         
    }
    read(req, res){   
    }
    delete(req, res){   
    }
}

module.exports = new UsuarioController ();