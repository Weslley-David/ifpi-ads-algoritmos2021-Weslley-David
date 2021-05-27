//34. Leia 3 números, calcule e escreva a média dos números.
const input = require('prompt-sync')()

// Entrada
const numero1 = Number(input('Digite um numero: '))
const numero2 = Number(input('Mais um         : '))
const numero3 = Number(input('Só mais um      : '))
// Processamento
const media = (numero1 + numero2 + numero3)/3

// Saída
console.log('média: ', media)