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


    getById: async (id) => {
        const results = await axios.get(`http://database:8004/Planet/${id}`);
        return results.data;
      },
 
      update: async (id, planet) => {
        return await axios
          .update(`http://database:8004/Planet/${id}`, planet)
          .then((res) => res.data);
      },
      delete: async (id) => {
        return await axios
          .delete(`http://database:8004/Planet/${id}`)
          .then((res) => res.data);
      },
};