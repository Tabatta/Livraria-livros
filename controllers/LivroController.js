const Livro = require('../models/Livro');
const livros = require('../database/data').carregarLivros || [];

exports.get = (req, res) => {
   const { titulo } = req.query;
   if(titulo){
      return res.json(
         livros.filter(livro =>livro.titulo.toLowerCase()
            .includes(titulo.toLowerCase()))
      );
   }
   res.json(livros);
};
exports.teste = (req, res) => {
	const Id = req.params.id;
	
	//res.redirect('/forgetPassword');
	res.send('hello, world!'+ Id);
}