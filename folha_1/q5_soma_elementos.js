//5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
const input = require('prompt-sync')()

// Entrada
const numero = input('Entre com um número de 3 dígitos: ')

// Processamento
resultado = parseInt(numero[0]) + parseInt(numero[1]) + parseInt(numero[2])

// Saída
console.log('Soma de seus elementos: ', resultado)
