programa {
  funcao inicio() {
    // exercicio do mano juda no dia

    real valor, dinheiro1, dinheiro2, dinheiro3, dinheiro4, dinheiro5 
    escreva ("Quanto faz na primeira corrida? ")
    leia (dinheiro1)
    escreva ("Quanto faz na segunda corrida? ")
    leia (dinheiro2)
    escreva ("Quanto faz na terçeira corrida? ")
    leia (dinheiro3)
    escreva ("Quanto faz na quarta corrida? ")
    leia (dinheiro4)
    escreva ("Quanto faz na quinta corrida? ")
    leia (dinheiro5)
    limpa ()
    valor = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4 + dinheiro5
    escreva("Voce ganhou R$ ", valor, " hoje")
    
    // exercicio do mano juda com 25% de desconto 

    real valor, di1, di2, di3, di4, di5 
    escreva ("Quanto faz na primeira corrida? ")
    leia (di1)
    escreva ("Quanto faz na segunda corrida? ")
    leia (di2)
    escreva ("Quanto faz na terçeira corrida? ")
    leia (di3)
    escreva ("Quanto faz na quarta corrida? ")
    leia (di4)
    escreva ("Quanto faz na quinta corrida? ")
    leia (di5)
    limpa ()
    valor = di1*3/4 + di2*3/4 + di3*3/4 + di4*3/4 + di5*3/4
    escreva("Voce ganhou R$ ", valor, " hoje")
     
     //exercicio do mano juca como salario 

    real valor, d1, d2, d3, d4, d5 
    escreva ("Quanto faz na primeira corrida? ")
    leia (d1)
    escreva ("Quanto faz na segunda corrida? ")
    leia (d2)
    escreva ("Quanto faz na terçeira corrida? ")
    leia (d3)
    escreva ("Quanto faz na quarta corrida? ")
    leia (d4)
    escreva ("Quanto faz na quinta corrida? ")
    leia (d5)
    limpa ()
    valor = 20*(d1*3/4 + d2*3/4 + d3*3/4 + d4*3/4 + d5*3/4)
    escreva("Voce ganhou R$ ", valor, " no mês")


  }
}
