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

exports.getById = (req, res) => {
   const { id } = req.params;
   res.json(
      livros.filter(livro => livro.id == id)
   );
};

exports.teste = (req, res) => {
	//const id = req.params.id;
	const { id } = req.params;
	res.redirect('/livro');
	//res.redirect('/livro', { id });
	//res.send('hello, world!'+ Id);
}