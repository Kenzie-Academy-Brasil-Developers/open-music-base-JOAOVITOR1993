function filtroCategoria(){
    const botoes = document.querySelectorAll("#categorias")
    botoes.forEach((botao)=>{
        botao.addEventListener("click", ()=>{
            botoes.forEach(botaoClasse =>{
                botaoClasse.className = "botao botaoCinza"
            })
            botao.classList.add("botaoPreto")
            if(botao.innerText === "Todos"){
                renderizarCards(products)
            }else{
                categories.forEach((categoria, index) =>{
                    if(botao.innerText === categoria){
                        const arrayFiltro = products.filter(produto =>{
                            if(produto.category === index){
                                return produto
                            }
                        })
                        renderizarCards(arrayFiltro)
                    }
                })
            }
        })
    })
}
filtroCategoria()

function filtroValorInput(){
    const input = document.querySelector(".filtroValor")
    const pValor = document.querySelector(".valorInput")

    input.addEventListener("mousemove", ()=>{
        pValor.innerText = `Até R$ ${Number(input.value).toFixed(2)}`
        const arrayFiltro = products.filter(produto =>{
            if(produto.price < input.value){
                return produto
            }
        })
        renderizarCards(arrayFiltro)
    })
  
}
filtroValorInput()

