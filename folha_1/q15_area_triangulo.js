//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
const input = require('prompt-sync')()

// Entrada
console.log('===cálculo de área do triângulo===')
const base = Number(input('base: '))
const altura = Number(input('altura: '))

// Processamento
const area = (base * altura)/2

// Saída
console.log('área do triângulo: ', area.toFixed(2))