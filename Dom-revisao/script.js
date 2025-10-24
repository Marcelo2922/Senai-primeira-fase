let usuario
function cadastrarusuario(){
    usuario = document.getElementById("inputusuario").value
    document.getElementById("inputusuario").value=''
    document.getElementById("resultado").innerHTML = `usuario cadastrado com sucesso: R${usuario}`
}