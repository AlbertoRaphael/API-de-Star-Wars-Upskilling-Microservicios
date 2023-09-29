

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
    
    getById: async (id) => {
        const results = await axios.get(`http://database:8004/Character/${id}`);
        return results.data;
      },


      create: async (character) => {
        const results = await axios.post("http://database:8004/Character",character);
        return results.data;
     },

     update: async (id, character) => {
        return await axios.update(`http://database:8004/Character/${id}`, character)
          .then((res) => res.data);
      },
      delete: async (id) => {
        return await axios.delete(`http://database:8004/Character/${id}`)
          .then((res) => res.data);
      },


   // create: async (object) => {
     //   return await axios.post("http://database:8004/", object);
   // },
};





//axios.get("http://database:8004/Character")