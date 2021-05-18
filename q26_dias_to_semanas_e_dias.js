//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
const input = require('prompt-sync')()

// Entrada
let dias = Number(input('Diga um número de dias: '))

// Processamento
const semanas = Math.trunc(dias/7)
dias = (dias%7)

// Saída
console.log('Semanas: ', semanas)
console.log('Dias   : ', dias)