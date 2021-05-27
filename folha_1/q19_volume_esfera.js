//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
const input = require('prompt-sync')()

// Entrada
console.log('===cálculo de volume de uma esfera===')
const raio = Number(input('raio: '))

// Processamento
const volume = (4 * 3.14 * raio ** 3)/3

// Saída
console.log('volume da esfera: ', volume.toFixed(2))