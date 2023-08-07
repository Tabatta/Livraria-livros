const Livro = require('../models/Livro');
const livros = require('../database/data').carregarLivros || [];

exports.get = (req, res) => {
   const { nome } = req.query;
   if(nome){
      return res.json(
         livros.filter(livro =>livro.nome.toLowerCase()
            .includes(nome.toLowerCase()))
      );
   }
   res.json(livros);
};