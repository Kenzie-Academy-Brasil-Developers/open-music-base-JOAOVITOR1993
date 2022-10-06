function renderizarCards(array){
    const ul = document.querySelector(".ulAlbuns")
    ul.innerHTML =""
    array.forEach(elemento => {
        const li = criarCard(elemento)
        ul.appendChild(li)
    });
}
renderizarCards(products)

function criarCard(objeto){
    const li = document.createElement("li")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const divConteudoCard = document.createElement("div")
    const divConteudoTexto = document.createElement("div")
    const pBanda = document.createElement("p")
    const pAno = document.createElement("p")
    const h2Titulo = document.createElement("h2")
    const divConteudoPrecoBotao = document.createElement("div")
    const pPreco = document.createElement("p")
    const botao = document.createElement("button")

    img.src = objeto.img
    divConteudoCard.className = "conteudoCard"
    pBanda.className = "texto3"
    pBanda.innerText = objeto.band
    pAno.className = "texto3"
    pAno.innerText = objeto.year
    h2Titulo.className = "texto1"
    h2Titulo.innerText = objeto.title
    pPreco.className = "texto2"
    pPreco.innerText = `R$ ${objeto.price.toFixed(2)}`
    botao.className = "botao botaoCinza2"
    botao.innerText = "Comprar"
 
    li.append(figure, divConteudoCard)
    figure.append(img)
    divConteudoCard.append(divConteudoTexto, h2Titulo, divConteudoPrecoBotao)
    divConteudoTexto.append(pBanda, pAno)
    divConteudoPrecoBotao.append(pPreco, botao)

    return li
}






