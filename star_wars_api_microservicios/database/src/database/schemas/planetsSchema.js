const { Schema } = require("mongoose");

const planetSchema = new Schema({

    "_id": String,
    "name": String,
    "rotation_period": String,
    "orbital_period": String,
    "diameter": String,
    "climate": String,
    "gravity": String,
    "terrain": String,
    "surface_water": String,
    "residents": [{ type: String, ref: "Character" }],//referencia al id de characters
    "planets":[{ type: String, ref: "Film" }]//arreglo de referencias de peliculas



});

planetSchema.statics.list = async function(){
    return await this.find()
    .populate("residents",["_id","name"])
    .populate("planets",["_id","name"])
};

planetSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("planets", ["_id", "name"]);
};

planetSchema.statics.insert = async function(film){
   return await this.create(film)
};



module.exports = planetSchema;



