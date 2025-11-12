// Arquivo serviços
const ServicoWeb = document.querySelector("#servico-web")
const ShowButton = document.querySelector("#show")
const hideButton = document.querySelector("hide")
ShowButton.addEventListener("click",()=>{
    ServicoWeb.classList.add("show")
    ServicoWeb.classList.remove("hide")
})
hideButton.addEventListener("click",()=>{
    ServicoWeb.classList.add("hide")
    ServicoWeb.classList.remove("show")
})