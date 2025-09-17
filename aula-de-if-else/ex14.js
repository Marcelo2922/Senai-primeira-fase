// Verificando Letra Maiúscula: Peça ao usuário para inserir uma letra e verifique se ela é maiúscula ou minúscula.
let letra = prompt ("digite uma letra")
if (letra.length !== 1 || !/[a-zA-Z]/.test(letra)) 
  alert("Digite apenas uma letra válida (A-Z ou a-z).");
if (letra == letra.toUpperCase()) {
  alert("Maiúscula");
} else {
  alert("Minúscula");
}
