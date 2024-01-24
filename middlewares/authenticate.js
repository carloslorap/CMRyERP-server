const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'carlos202';

exports.auth = function(req,res,next){
    if (!req.headers.authorization) {
        return res.status(403).send({message:'NoHeadersError'})
    }
    var token = req.headers.authorization.replace(/['"]+/g,'')

    var segment = token.split('.')
    
    if (segment.length !== 3) {
        return res.status(403).send({message:'NoHeadersError'})
    }else{
        try {
                var payload = jwt.decode(token,secret)
                if (payload <= moment().unix()) {
                    return res.status(403).send({message:'TokenExpirado'})
                }
        } catch (error) {
            return res.status(403).send({message:'ErrorToken'})
        }
    }
    req.user = payload
    next()
}