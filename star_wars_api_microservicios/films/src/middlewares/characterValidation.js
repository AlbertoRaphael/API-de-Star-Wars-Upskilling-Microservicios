const {ClinentError} = require("../utils/errors")

module.exports= (req,res,next)=>{
    const {name}= req.body;
    if(name)return next();
    else throw new ClinentError("Error en el nombre del Film", 401);
};