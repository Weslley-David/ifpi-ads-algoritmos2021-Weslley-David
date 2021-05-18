//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
const input = require('prompt-sync')()

// Entrada
console.log('===cálculo de cumprimento de uma circunferência===')
const raio = Number(input('raio: '))

// Processamento
const cumprimento = 2 * 3.14 * raio

// Saída
console.log('cumprimento do círculo: ', cumprimento.toFixed(2))