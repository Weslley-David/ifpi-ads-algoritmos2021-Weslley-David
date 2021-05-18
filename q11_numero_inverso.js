//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
const input = require('prompt-sync')()

// Entrada
const numero_1 = input('Entre com um número de 3 dígitos: ')
let inverso = numero_1[2] + numero_1[1] + numero_1[0]

// Processamento
    
// Saída
console.log('Numero Inverso: ', inverso)