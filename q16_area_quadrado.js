//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
const input = require('prompt-sync')()

// Entrada
console.log('===cálculo de área do quadrado===')
const lado = Number(input('lado: '))

// Processamento
const area = (lado * lado)

// Saída
console.log('área do quadrado: ', area.toFixed(2))