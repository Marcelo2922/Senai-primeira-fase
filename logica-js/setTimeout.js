// setTimeout(()=>{
//     console.log("Executei depois de 3s")
// },3000)

const soma = ()=>console.log (6+2)


function saudacao(){
    console.log("Ola")
}

function imprime_dado(){
    console.log("Imprimir")
}
saudacao()
setTimeout(soma,2000)
setTimeout(imprime_dado,5000)