const {Router, json} = require("express");
const chracarters = require("../data/characters.json");

const charactersRouter = Router();

charactersRouter.get("/", (req, res)=>{
    res.status(200).json(chracarters);
});
module.exports = charactersRouter;