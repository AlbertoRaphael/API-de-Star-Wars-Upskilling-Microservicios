
const{ catcheAsync} = require("../utils")
//manejador de errores mejorados
module.exports = {
    getCharacters: catcheAsync(require("./getCharacters")) ,
    createCharacter: catcheAsync(require("./createCharacter")),
    getCharacter: catcheAsync(require("./getCharacter")),
    putCharacter: catcheAsync(require("./putCharacter")),
    deleteCharacter: catcheAsync(require("./delete")),
};