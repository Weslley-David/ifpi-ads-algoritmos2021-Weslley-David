//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
const input = require('prompt-sync')()

// Entrada
let meses = Number(input('Meses: '))

// Processamento
anos = (meses/12)
meses = (meses%12)

// Saída
console.log('Anos    : ', Math.floor(anos))
console.log('Meses   : ', meses)