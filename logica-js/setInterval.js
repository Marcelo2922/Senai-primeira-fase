// setInterval(()=>{
//     console.log("Executei")
// },2000)

const prompt = require ('prompt-sync')()

let contador_incial = Number(prompt("Digite um valor inicial: "))
let contador_final = Number (prompt('digite um valor final: '))

let intervalo = setInterval(()=>{
    console.log(contador_incial)
    contador_incial+=5
    if (contador_incial > contador_final){
        clearInterval(intervalo)
    }
},100)