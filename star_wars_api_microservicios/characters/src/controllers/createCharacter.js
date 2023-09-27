const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
   
        const newCharacter = await Character.create();
        //res.status(200).send("creando personaje");
        response(res, 201, newCharacter);
    

};