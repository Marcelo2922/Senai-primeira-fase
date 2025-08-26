programa {

  inclua biblioteca Matematica

  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia
    escreva("Digite o nome do aluno: ")
    leia(nome)
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)
    escreva("Digite a frequncia do aluno, é de 0 a 1: ")
    leia(frequencia)
    limpa ()
    media = (nota1+nota2+nota3)/3
    media = Matematica.arredondar (media,2)
    frequencia = frequencia*100
      escreva("\nA media de nota: ", media)
      escreva("\nA frequencia: ", frequencia, "% \n")
      se (media >=7 e frequencia >=70 ){
      escreva("\nParabems ", nome, ", você foi provado")
      }
      senao {
        escreva("\nInfelizmente", nome, ", você reprovado")
      }

  }
}
