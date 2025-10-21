function mostrar_mensagem(){
    alert("Mensagem")
    alert("Resto da Mensagem")
}
function exercicio1(){
    // let nome = prompt("Digite seu nome")
    // alert (`Olá ${nome}`)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = `Olá ${nome}`
    
}

function efetuarlogin(){
    let resultado = document.getElementById("resultadologin")
    let user =document.getElementById("username").value
    if (user == "Marcelo"){
       resultado.innerHTML = "login com sucesso"
    }else{
        resultado.innerHTML = "incorreto"
    }
}