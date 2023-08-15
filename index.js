const express = require('express');
const app = express();
const routes = require('./routes')

app.use("/", express.static(__dirname + '/public'))
app.use(express.json())
routes.loadRoutes(app)

app.listen(8080);
console.log("rodando")