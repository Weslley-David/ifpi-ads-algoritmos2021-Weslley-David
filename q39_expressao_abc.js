/*39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
d = ((a + b)**2 + (b + c)**2)/2*/
const input = require('prompt-sync')()

// Entrada
const a = input('digite número a: ')
const b = input('digite número b: ')
const c = input('digite número c: ')

// Processamento
const d = ((a + b)**2 + (b + c)**2)/2

// Saída
console.log('Resultado da expressão: ', d)