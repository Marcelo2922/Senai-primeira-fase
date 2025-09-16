// Verificando Votação: Peça ao usuário para inserir sua idade e verifique se ele é elegível para votar (idade mínima de 16 anos).
let idade
idade = prompt ("Digite sua idade: ")
if (idade  >= 18){
    alert ("É obrigatório a sua votação!!! ")
}else if (idade >=16){
    alert("Pode vota!")
}else{
    alert("Não pode votar")
}