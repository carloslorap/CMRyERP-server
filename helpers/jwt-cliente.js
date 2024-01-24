const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'carlos202';


exports.createToken = function(user){
    const payload = {
        sub:user._id,
        nombres:user.nombres,
        apellidos:user.apellidos,
        email:user.email,
        tipo:user.tipo,
        iat:moment().unix(),
        exp:moment().add(1,'day').unix(), //el tiempo que se expira su token del usuario

    }

    return jwt.encode(payload,secret)
}