function classificarnota (nota){
    if (nota >= 90 && nota <=100){
        return'A';
    }else if (nota >=80){
        return 'B'
    }else if  (nota >=70){
        return 'C'
    }else if (nota >=50){
        return 'D'
    }else if (nota >= 0){
        return 'E'
    }else{
        return 'Nota invalida'
    }
}
let nota_do_aluno = prompt("Digite a nota do aluno: ")
let nota = Number(nota_do_aluno)
if (!isNaN(nota) && nota >= 0 && nota <= 100) {
  let classificacao = classificarNota(nota);
  alert(`Sua nota foi ${nota}. Classificação: ${classificacao}`);
} else {
  alert("Por favor, insira uma nota válida entre 0 e 100.");
}