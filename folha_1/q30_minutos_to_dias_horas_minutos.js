/*30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.*/
const input = require('prompt-sync')()

// Entrada
let minutos = Number(input('Minutos: '))

// Processamento
dias = (minutos/1440)
minutos = (minutos%1440)
horas = (minutos/60)
minutos = (minutos%60)

// Saída
console.log('dias    : ', Math.floor(dias))
console.log('horas   : ', Math.floor(horas))
console.log('minutos : ', Math.floor(minutos))