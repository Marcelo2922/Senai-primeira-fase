let nomes = ["Leonardo","Marcelo","Maicon"];

if (!nomes.includes("Patolino")) {
   
    if (nomes.length < 3) {
        nomes.push("Patolino");
    } else {
        console.log("Seu grupo já possui membros o suficiente");
    }
} else {
    console.log("Patolino já está no grupo");
}
nomes.sort();
if (!nomes.includes("Pernalonga")) {

    nomes.unshift("Pernalonga");
} else {
    let index = nomes.indexOf("Pernalonga");
    nomes.splice(index, 1);
    nomes.unshift("Pernalonga");
}

if (!nomes.some(nome=>nome.toLowerCase().startsWith("f"))){
    nomes.push ("Frajola")
}
console.log(nomes);

