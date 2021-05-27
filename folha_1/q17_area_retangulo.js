//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
const input = require('prompt-sync')()

// Entrada
console.log('===cálculo de área do retângulo===')
const base = Number(input('base: '))
const altura = Number(input('altura: '))

// Processamento
const area = (base * altura)

// Saída
console.log('área do retangulo: ', area.toFixed(2))