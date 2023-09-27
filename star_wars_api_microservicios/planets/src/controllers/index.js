const { catcheAsync } = require("../utils")
//manejador de errores mejorados

module.exports ={
    getPlanets: catcheAsync (require("./getPlanets")),
    createPlanet: catcheAsync (require("./createPlanet"))
};

