//28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
const input = require('prompt-sync')()

// Entrada
let horas = Number(input('Horas: '))

// Processamento
let semanas = (horas/168)
horas = (horas%168)
let dias = (horas/24)
horas = (horas%24)

// Saída
console.log('Semanas : ', Math.floor(semanas))
console.log('Dias    : ', Math.floor(dias))
console.log('Horas   : ', Math.floor(horas))