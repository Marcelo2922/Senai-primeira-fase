let nomes = ["Leonardo", "Michael","Marcelo",];
if (nomes.length < 3) {
    nomes.push("Patolino");
} else {
    console.log("Seu grupo já possui membros o suficiente");
}
nomes.sort();
nomes.unshift("Pernalonga")
if (!nomes.some(nome=>nome.toLowerCase().startsWith("f"))){
    nomes.push ("Frajola")
}
console.log(nomes);

