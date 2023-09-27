const Film = require("../data");
const { response } = require("../utils");


module.exports = async (req, res) => {
   const films = await Film.list();
   //response(res, 200, characters);
   res.status(200).json(films);
};