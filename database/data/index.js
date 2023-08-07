const produtos = require("./produtos.json")
const Produto = require("../../models/Produto")

const carregarProdutos = (()=>{
	const lista = []
	for(i in produtos){
		lista.push(new Produto(produtos[i]))
	}
	return lista
})

module.exports = {
	carregarProdutos
}