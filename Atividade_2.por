programa {
  inclua biblioteca Matematica

  funcao inicio() {
    
    //exercicio 1

    real area, raio
    escreva ("Raio: ")
    leia (raio)
    area = 3.14159 * raio*raio
    escreva ("Área: ", area)

    //exercico2

    real area2, base, altura
    escreva ("Altura: ")
    leia (altura)
    escreva("base: ")
    leia(base)
    area2= (base*altura)/2
    escreva("area: ", area2)

    //exercico 3

    cadeia nome, sobrenome, nome_completo, por
    escreva("Nome: ")
    leia (nome)
    escreva("Sobrenome: ")
    leia(sobrenome)
    nome_completo = nome + " " + sobrenome
    escreva("Seu nome completo é: ", nome_completo)

    //exercicio 4

    inteiro n1,n2, soma
    escreva("Primeiro numero: ")
    leia (n1)
    escreva("Segundo numero: ")
    leia(n2)
    soma = n1*n1 + n2*n2
    escreva("Resutado: ", soma)

    inteiro n
    escreva("Digite um número: ")
    leia (n)
    inteiro valor = Matematica.raiz (n,2)
    escreva("A raiz é: ",valor)

    real num1,num2, soma2
    escreva("Digite um número: ")
    leia(num1)
    escreva("digite um segundo numero: ")
    leia(num2)
    soma2 = (num1 + num2)/2
    escreva("Resutado: ", soma2)

  }
  
}
