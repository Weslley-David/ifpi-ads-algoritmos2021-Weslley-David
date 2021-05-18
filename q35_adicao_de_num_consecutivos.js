/*35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.*/
const input = require('prompt-sync')()

// Entrada
const numero = input('digite um numero de 4 dígitos: ')
// Processamento
const soma = (parseInt(numero[0])) + parseInt(numero[1]) + parseInt(numero[2]) + parseInt(numero[3])

// Saída
console.log('Soma: ', soma)