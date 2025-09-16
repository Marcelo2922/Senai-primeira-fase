// Mensagem Secreta: Peça ao usuário para digitar uma senha e, se a senha for "abracadabra", exiba uma mensagem secreta.
let senha, senha_secreta
senha_secreta = ("abracadabra")
senha = prompt ("Digite sua senha: ")
if(senha.length >=8){
    alert("ACESSO PERMITIDO")
}else if (senha === senha_secreta){
    alert("Minha namorada é a melhor!!")
}else{
    alert("ACESSO NEGADO")
}
alert("A minha namorada é a melhor!!")