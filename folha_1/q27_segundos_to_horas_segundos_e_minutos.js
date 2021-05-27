//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
const input = require('prompt-sync')()

// Entrada
let segundos = Number(input('Segundos: '))

// Processamento
let horas = (segundos/3600)
segundos = (segundos%3600)
let minutos = (segundos/60)
segundos = segundos%60

// Saída
console.log('Horas   : ', Math.floor(horas))
console.log('Minutos : ', Math.floor(minutos))
console.log('Segundos: ', Math.floor(segundos))