const livros = require("./livros.json")
const Livro = require("../../models/Livro")

const carregarLivros = (()=>{
	const lista = [];
	for(i in livros){
		lista.push(new Livro(livros[i]))
	}
	return lista;
})()

module.exports = {
	carregarLivros
}