const LivroController = require('../controllers/LivroController');

module.exports = (router) => {
   router.get('/livros', LivroController.get);
}