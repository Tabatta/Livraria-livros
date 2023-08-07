modlue.exports = class Livro{
	constructor({id, titulo, autor, sinopse, paginas, tipo_capa, img_capa}){
		this.id = id || Math.floor(+new Date() / 1000);
		this.titulo = titulo;
		this.autor = autor;
		this.sinopse = sinopse;
		this.paginas = paginas;
		this.tipo_capa = tipo_capa;
		this.img_capa = img_capa;
	}	
}