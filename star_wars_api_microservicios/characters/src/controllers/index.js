
const{ catcheAsync} = require("../utils")
//manejador de errores mejorados
module.exports = {
    getCharacters: catcheAsync(require("./getCharacters")) ,
    createCharacter: catcheAsync(require("./createCharacter")),
};