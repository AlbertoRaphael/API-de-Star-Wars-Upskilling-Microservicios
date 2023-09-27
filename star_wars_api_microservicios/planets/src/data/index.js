const  axios  = require("axios");
const { response } = require("../utils");


module.exports = {
    list: async () => {
        const planet = await axios.get("http://database:8004/Planet");
        console.log(planet)
        return planet.data
    },


    create: async (object) => {
        return await axios.post("http://database:8004/", object);
    },
};