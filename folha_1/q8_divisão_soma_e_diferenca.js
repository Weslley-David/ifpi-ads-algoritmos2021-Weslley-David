//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Entre com um número: '))
const numero_2 = Number(input('Mais uma vez: '))

// Processamento
const resultado = ((numero_1 + numero_2)/(numero_1 - numero_2))
// Saída
console.log('(', numero_1, '+', numero_2, ')/(', numero_1, '-', numero_2,') = ', resultado.toFixed(2))