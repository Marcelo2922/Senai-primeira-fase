// let i = 0
// let soma = 0
// while(i<10){
//      i++
//      let nota = Number(prompt(`Digite a ${+i}° nota`))
//      soma = soma + nota
// }

// alert("A soma é " + soma)

// for (i=0; i <3; i++){
//     alert(`Valor do i ${i}`)
// }


let soma = 0

for (let i=0; i <10; i++){

     let nota = Number(prompt(`Digite a ${+i+1}°nota: `))
     soma = soma + nota
}
alert("A soma é " + soma)
