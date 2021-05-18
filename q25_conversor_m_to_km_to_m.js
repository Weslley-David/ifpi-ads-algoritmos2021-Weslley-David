//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
const input = require('prompt-sync')()

// Entrada
var metros = Number(input('Entre com um valor em metros(m): '))

// Processamento
const quilometros = metros/1000
metros = metros%1000

// Saída
console.log('Equivale a ', Math.ceil(quilometros), 'quilômetros e', metros, 'metros.')