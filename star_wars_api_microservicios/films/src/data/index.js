//const films = require("./films.json");
const  axios  = require("axios");
const { response } = require("../utils");


module.exports = {
    list: async () => {
        const film = await axios.get("http://database:8004/Film");
        console.log(film)
        return film.data
    },

    create: async (object) => {
        return await axios.post("http://database:8004/", object);
    },
};