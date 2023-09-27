const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");


const app = express();
app.use(morgan("dev"));

//puerta de enlace desde 8000 a 8001,8002,8003 
//se recomienda usar node por que nodemon detiene las peticiones
app.use("/characters",
    createProxyMiddleware({
        target: "http://characters:8001",
        changeOrigin: true
    })
);

app.use("/films",
    createProxyMiddleware({
        target: "http://films:8002",
        changeOrigin: true
    })
);

app.use("/planets",
    createProxyMiddleware({
        target: "http://planets:8003",
        changeOrigin: true
    })
);


app.listen(8000, () => {
    console.log('Gateway on port 8000');
});