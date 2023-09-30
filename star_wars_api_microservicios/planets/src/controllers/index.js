const { catcheAsync } = require("../utils")
//manejador de errores mejorados

module.exports ={
    getPlanets: catcheAsync (require("./getPlanets")),
    getPlanet: require("./getPlanet"),
    createPlanet: catcheAsync (require("./createPlanet")),
    updatePlanet: catcheAsync(require("./updatePlanet")),
    deletePlanet: catcheAsync(require("./deletePlanet")),
};

