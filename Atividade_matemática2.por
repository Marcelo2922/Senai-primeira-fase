programa {
  funcao inicio() {
      inteiro salario, salario_diario
    inteiro dias
    escreva ("Quanto você recebe? ", salario)
    leia (salario)
    escreva ("Quantos dias você trabalha? ", dias)
    leia (dias)
    salario_diario = salario / dias
    escreva ("\nVocê recebe por dia: ",salario_diario)

    real cafe, coxinha, halls, doce_de_leite
    real conta
    escreva("\nQuanto ta o cafe? ", cafe)
    leia (cafe)
    escreva("Quanto ta a coxinha? ", coxinha)
    leia(coxinha)
    escreva("Quanto ta o halls? ", halls)
    leia (halls)
    escreva ("Quanto ta o doce de leite? ", doce_de_leite)
    leia (doce_de_leite)
    conta = cafe + coxinha + halls + doce_de_leite
    escreva ("O valor da conta é: R$ ", conta)

    real nota1, nota2, nota3, nota4
    real media
    escreva ("Qual a nota do primeiro semestre? ",nota1)
    leia (nota1)
    escreva ("Qual a nota do segundo semestre? ",nota2)
    leia (nota2)
    escreva ("Qual a nota do terceiro semestre? ", nota3)
    leia (nota3)
    escreva ("Qual a nota quarto semestre? ", nota4)
    leia (nota4)
    media = (nota1+nota2+nota3+nota4) /4
    escreva ("A media é: ", media)

    inteiro vitoria, empate, pontuacao
    escreva ("Quantas vitorias teve? ", vitoria)
    leia (vitoria) 

    escreva("Quantos empates teve? ", empate)
    leia(empate)
    pontuacao = vitoria*3 + empate
    escreva ("A pontução do time é: ", pontuacao)

    real cafe2, coxinha2, halls2, doce_de_leite2
    real conta2
     escreva("\nQuanto ta o cafe? ", cafe2)
    leia (cafe2)
    escreva("Quanto ta a coxinha? ", coxinha2)
    leia(coxinha2)
    escreva("Quanto ta o halls? ", halls2)
    leia (halls2)
    escreva ("Quanto ta o doce de leite? ", doce_de_leite2)
    leia (doce_de_leite2)
    conta2 = 2*cafe2 + coxinha2 + halls2 + doce_de_leite2
    escreva ("O valor da conta é: R$ ", conta2)

    real critico, dano
    escreva ("Quanto de dano recebeu? ", dano)
    leia (dano)
    critico = dano * 1.5
    escreva ("Critico é de: ",critico)
    
    real critico_jogador, dano_npc,bonus
    escreva ("Quanto de dano a espada da? ", dano_npc)
    leia (dano_npc)
    bonus = 1.5*dano_npc/2
    critico_jogador = dano_npc + bonus
    escreva ("Critico é de: ",critico_jogador)

    real media2, n1, p1, n2, p2
    escreva ("Qual a primeira nota? ", n1)
    leia(n1)
    escreva ("Qual a primeira nota? ", p1)
    leia(p1)
    escreva ("Qual a primeira nota? ", n2)
    leia(n2)
    escreva ("Qual a primeira nota? ", p2)
    leia(p2)
    media2 = (n1*p1+n2*p2)/(p1+p2)
    escreva ("Media de nota: ",media2)

    real poupanca,salario2,moradia,agua,luz,internete,gasolina,netflix,telefone,outros
     escreva ("Qual seu salario? ")
     leia(salario2)
     escreva ("Qual o valor do aluguel? ")
     leia (moradia)
      escreva ("Qual o valor do agua? ")
     leia (agua)
      escreva ("Qual o valor da sua luz? ")
     leia(luz)
     escreva ("Qual o valor do internete? ")
     leia (internete)
      escreva ("Qual o valor do gasolina? ")
     leia (gasolina)
      escreva ("Qual o valor da netflix? ")
     leia(netflix)
     escreva ("Qual o valor do telefone? ")
     leia (telefone)
      escreva ("Qual o valor do outros? ")
     leia (outros)
   poupanca = salario2 -(moradia + agua + luz + internete + gasolina + netflix + telefone + outros)
   escreva ("Sua poupança é de R$ ", poupanca)

    real cafe3, coxinha3, halls3, doce_de_leite3
     real conta3
      escreva("\nQuanto ta o cafe? ")
     leia (cafe3)
     escreva("Quanto ta a coxinha? ")
     leia(coxinha3)
     escreva("Quanto ta o halls? ")
     leia (halls3)
     escreva ("Quanto ta o doce de leite? ")
     leia (doce_de_leite3)
     conta3 = 3*cafe3 + coxinha3 + halls3 + 2* doce_de_leite3
     escreva ("O valor da conta foi R$ ", conta3)

   inteiro cafe4, alunos1, cafe_per_capita
   escreva ("Quantos café tem? ")
   leia(cafe4)
   escreva ("Quantos alunos tem? ")
   leia (alunos1)
   cafe_per_capita = cafe4 / alunos1
   escreva ("Cada aluno ganha ", cafe_per_capita, " cafe")

  
   inteiro cafe5, alunos2, cafe_per_capita2, extra
   escreva ("Quantos café foram consumidos? ")
   leia(cafe5)
   escreva ("Quantos alunos foram tomar café? ")
   leia (alunos2)
   extra = cafe5 *5/10
   cafe_per_capita2 = (cafe5+extra) / alunos2
   escreva ("A quantidade de cafe foi cunsumido por pessoa foi de ", cafe_per_capita2)
  }
}
