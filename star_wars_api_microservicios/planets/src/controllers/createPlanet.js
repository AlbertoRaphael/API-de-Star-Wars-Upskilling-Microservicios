const Planet = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {

    const newPlanet = await Planet.create();
    //res.status(200).send("creando personaje");
    response(res, 201, newPlanet);


};