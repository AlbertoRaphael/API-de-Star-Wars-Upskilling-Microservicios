

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

    create: async (object) => {
        return await axios.post("http://database:8004/", object);
    },
};





//axios.get("http://database:8004/Character")