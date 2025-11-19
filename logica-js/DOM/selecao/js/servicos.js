const inputForm = document.querySelector("#Busca")
const botaoBusca = document.querySelector("#botaoBusca")
const resultadoDiv = document.querySelector("#resultadoDiv")
inputForm.addEventListener("keydown",(e)=>{
    console.log(e.key)
})
inputForm.addEventListener("focus",(e)=>{
    inputForm.style.backgroundColor = "#ff0"
})

inputForm.addEventListener("blur",(e)=>{
    inputForm.style.backgroundColor = ""
})
function searchResult(){
    const valorBusca = inputForm.ariaValueMax.trim()
    if (valorBusca){
        resultadoDiv.textContent = `Você buscou por ${valorBusca}`
    }else{
        resultadoDiv.textContent = `Por favor, insira algo na busca`
    }
}
botaoBusca.addEventListener("click",(e)=>{
    searchResult()
});

const botaoTrocaTema = document.querySelector("#tema")

function alternartema(){
    document.body.classList.toggle("escuro")
    document.body.classList.toggle("claro")

}
botaoTrocaTema.addEventListener("click",(e)=>{
    alternartema()
})