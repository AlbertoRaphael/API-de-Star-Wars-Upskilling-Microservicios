

const { response } = require("../utils");
const  axios  = require("axios");

//const characters = require("./characters.json");

module.exports = {
   //list: async () => {
     //   return characters;
    //},
    list: async () => {
        const character = await axios.get("http://database:8004/Character");
        console.log(character)
        return character.data
    },

    create: async () => {
        throw Error("Hay un error en la BDD al momento de crear el personaje")
    },
};





//axios.get("http://database:8004/Character")