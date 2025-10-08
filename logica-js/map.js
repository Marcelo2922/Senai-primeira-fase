// const numeros = [3,5,8,10]

// const valores_dobrados = numeros.map (valor=>valor*2)
// console.log(numeros)
// console.log(valores_dobrados)

const usuarios =  [
    {nome: "Ana", idade: 22},
    {nome:"Marcelo", idade: 21},
    {nome: "Amanda", idade: 53},
]
// const nomes_usuarios = usuarios.map (usuario=>usuario.nome)
// console.log(nomes_usuarios)

const idade_usuarios = usuarios.map (usuario=>usuario.idade)
console.log(idade_usuarios)

    for (let idade of idade_usuarios){
        console.log(idade)
    }
