const express = require("express");
const morgan = require("morgan");


const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/films", require("./routes"));

//ruta default para el error 404
server.use("*",(req,res)=>{
    res.status(404).send("Not found");
});

//este es el manejador de errores del servidor
server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500 ).send({
        error : true,
        message: err.message,
    });
});

module.exports = server;