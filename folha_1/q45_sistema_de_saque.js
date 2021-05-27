//AINDA FALTA TERMINAR
/* 45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/
const input = require('prompt-sync')()

// Entrada
let saque = input('diga um valor em R$: ')

// Processamento
nota_100 = saque/100
saque = (saque%100)
nota_50  = saque/50
saque = (saque%50)
nota_20  = saque/20
saque = (saque%20)
nota_10  = saque/10
saque = (saque%10)
nota_5  = saque/5
saque = (saque%5)
nota_1  = saque/1
saque = (saque%1)

// Saída
console.log('Notas de 100:', Math.floor(nota_100))
console.log('Notas de 50 :', Math.floor(nota_50))
console.log('Notas de 20 :', Math.floor(nota_20))
console.log('Notas de 10 :', Math.floor(nota_10))
console.log('Notas de 5  :', Math.floor(nota_5))
console.log('Notas de 1  :', Math.floor(nota_1))