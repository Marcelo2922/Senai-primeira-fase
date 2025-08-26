programa {
  funcao inicio() {
    //exercicio 1005
    real nota1, nota2,media, peso1, peso2
    peso1 = 3.5
    peso2 = 7.5
    escreva ("Qual a primeira nota? ",nota1)
    leia (nota1)
    escreva ("Qual a segunda nota? ",nota2)
    leia (nota2)
    media = (nota1*peso1+nota2*peso2) / (peso1+peso2)
    escreva ("A media é: ", media)

    //exercicio 1006

     real n1, n2,n3, media, p1, p2, p3
    p1 = 2
    p2 = 3
    p3 = 5
    escreva ("Qual a primeira nota? ")
    leia (n1)
    escreva ("Qual a segunda nota? ")
    leia (n2)
     escreva ("Qual a terceira nota? ")
    leia (n3)
    media = (n1*p1+n2*p2+n3*p3) / (p1+p2+p3)
    escreva ("A media é: ", media)

    //exercicio 1008

     real salario, salario_horario, horas,fucionario
     escreva ("Qual seu numero de funcionario? ")
     leia (fucionario)
    escreva ("Quantas horas você trabalha? ")
    leia (horas)
    escreva ("Quanto você ganha por hora? ")
    leia (salario_horario)
    salario = salario_horario * horas
    escreva ("\nVocê recebe R$ ",salario)

    //exercicio 1009 

    cadeia nome
    real salario_total,salario_fixo, vendas
    escreva("Qual seu nome? ")
    leia (nome)
    escreva ("Quanto você recebe? ")
    leia (salario_fixo)
    escreva ("Quantas vendas efetuou? ")
    leia(vendas)
    salario_total= vendas*15/100 +salario_fixo
    escreva("O seu salario é de R$ "+salario_total)

    //exercicio 1010

    real peca1, peca2, conta1,conta2, valor1,valor2,quantidade1,quantidade2
    escreva("Qual o código da primeira peça? ")
    leia (peca1)
    escreva ("Qual o código da segunda peça? ")
    leia (peca2)
    escreva("Qual o valor da primeira peça? ")
    leia (valor1)
    escreva("Qual o valor da segunda peça? ")
    leia(valor2)
    escreva("Quanto quer da primeira peça? ")
    leia(quantidade1)
    escreva("Quanto quer da segunda peça? ")
    leia(quantidade2)
    limpa()
    conta1= valor1*quantidade1
    conta2= valor2*quantidade2 
    escreva ("O valor da primera peça é: R$ ",conta1 ,"\nO valor da segunda peça é: R$",conta2)

    //exercicio 1014

    real km,combustivel, consumo
    escreva("Qual a distancia percorida? ")
    leia(km)
    escreva("Qual a quantidade de combustível consumido durante o percurso? ")
    leia(combustivel)
    consumo = km / combustivel
    escreva("O consumo por litro foi de: ", consumo)
  }
}
