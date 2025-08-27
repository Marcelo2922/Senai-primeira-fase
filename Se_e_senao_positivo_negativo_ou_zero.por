programa {
  funcao inicio() {
    real nu1
    escreva ("Digite o número: " )
    leia (nu1)
    se (nu1>0) {
      escreva("O seu número é positivo ")
    } senao se(nu1 == 0){
      escreva("O seu número é 0")
    } senao {
      escreva("Seu número é negativo")
    }
  }
}
