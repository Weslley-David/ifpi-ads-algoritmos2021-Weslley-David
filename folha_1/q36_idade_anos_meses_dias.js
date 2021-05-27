//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
const input = require('prompt-sync')()

// Entrada
const anos = Number(input('Quantos anos você tem?  '))
const meses = Number(input('Quantos meses você tem? '))
const dias = Number(input('Quantos dias você tem?  '))
// Processamento
let dias_resultado = dias + (meses*30) + (anos*365) 

// Saída
console.log('Você teve ', dias_resultado, 'de vida.')