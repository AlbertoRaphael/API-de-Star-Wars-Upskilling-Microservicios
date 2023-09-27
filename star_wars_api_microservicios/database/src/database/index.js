const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

//const Character = conn.model("Character",require("./schemas/charactersSchema"));
//const Film = conn.model("Film",require("./schemas/filmSchema"));
//const Planet = conn.model("Planet", require("./schemas/planetSchema"));



//Character.find().then((res)=> console.log(res));

//consulta para ver el contenido de la informacion unicamente de las peliculas
//Character.find()
//.populate("films",["_id","tittle"])//pupulate se usa para buscar dentro de las peliculas y decirle que s lo unioc que desea traer
//.then((res)=> console.log(res[0]));

module.exports = {
    Character: conn.model("Character",require("./schemas/charactersSchema")),
    Film: conn.model("Film", require("./schemas/filmsSchema")),
    Planet: conn.model("Planet", require("./schemas/planetsSchema"))

}