const server = require("./src/server");

const { Character, Film, Planet } = require("./src/database");
//const characterSchema = require("./src/database/schemas/charactersSchema");


//Planet.list().then((res) => console.log(res));
//Planet.get(1).then((res)=> console.log(res));
//Planet.insert({
//  _id: "200",
// name: "edolas",
//  terrain: "spring",
//}).then((res) => console.log(res));


//

//Film.list().then((res) => console.log(res))
//Film.get(1).then((res)=> console.log(res));
//Film.insert({
//  _id: "200",
// title: "regreso de los sith",
//  release_date: "2050",
//}).then((res) => console.log(res));



//se llama la funcion list que es characterSchema
//Character.list().then((res) => console.log(res));
//Character.get(1).then((res)=> console.log(res));

//es para crear un characters y ingresarlo a la base de datos
//Character.insert({
//   _id: "200",
//  name: "Jorge Vega",
//  birth_year: "1991",
//}).then((res) => console.log(res));

server.listen(8004, () => {
    console.log("Database service on PORT 8004");
});