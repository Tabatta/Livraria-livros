Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
}		
function mostrarLivros(livros){
	const galeriaLivros = document.querySelector(".mostrarLivros")
	
	livros.shuffle();
	
	galeriaLivros.textContent= "teste"
	for(let i= 0; i < livros.length; i++){
		const linkLivro = document.createElement("a");
		const imgLivro = document.createElement("img")
        linkLivro.href = 'api/livros/'+ livros[i].id;
        linkLivro.title = livros[i].titulo;
		imgLivro.src = livros[i].img_capa;
        imgLivro.alt = livros[i].titulo;
		imgLivro.className = "livros"
        linkLivro.append(imgLivro);
		galeriaLivros.append(linkLivro)
	}
}
	
listarLivrosService()
async function listarLivrosService() {
    const resposta = await fetch('api/livros');
    const livros = await resposta.json();
    mostrarLivros(livros);
}