const express = require('express');
const IndexRoute = require('./routes/IndexRoute');
const LivroRoute = require('./routes/LivroRoute');
const routerApi = express.Router(); // Define um novo router para as rotas da API

const loadRoutes = (app) => {
   IndexRoute(routerApi); // Carrega rota do Index
   LivroRoute(routerApi); // Carrega rotas do Livro
   app.use('/api', routerApi); // Define o prefixo '/api' para as rotas carregadas
}

module.exports = {
   loadRoutes
}