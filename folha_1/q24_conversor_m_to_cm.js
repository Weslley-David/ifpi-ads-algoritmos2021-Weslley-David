//24. Leia um valor em m, calcule e escreva o equivalente em cm.
const input = require('prompt-sync')()

// Entrada
const metros = Number(input('Entre com um valor em metros(m): '))

// Processamento
const centimetros = metros * 100

// Saída
console.log('valor em centímetros(cm): ', centimetros)