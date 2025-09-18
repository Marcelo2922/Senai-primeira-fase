// Dias em um Mês: Peça ao usuário para inserir o nome de um mês e, em seguida, determine quantos dias ele tem.
let mes = prompt("Digite um mês para ver a quantidade de dias que vai ter:").toLowerCase();

if (mes == "janeiro") {
    alert("janeiro tem 31 dias");
} else if (mes == "fevereiro") {
    alert("fevereiro tem 28 ou 29 dias");
} else if (mes == "Março") {
    alert("Março tem 31 dias");
} else if (mes == "Abril") {
    alert("Abril tem 30 dias");
} else if (mes == "Maio") {
    alert("Maio tem 31 dias");
} else if (mes == "junho") {
    alert("junho tem 30 dias");
} else if (mes == "julho") {
    alert("julho tem 31 dias");
} else if (mes == "Agosto") {
    alert("Agosto tem 31 dias");
} else if (mes == "Setembro") {
    alert("Setembro tem 30 dias");
} else if (mes == "Outubro") {
    alert("Outubro tem 31 dias");
} else if (mes == "Novembro") {
    alert("Novembro tem 30 dias");
} else if (mes == "Dezembro") {
    alert("Dezembro tem 31 dias");
} else {
    alert("Mês inválido! Tente novamente.");
}
