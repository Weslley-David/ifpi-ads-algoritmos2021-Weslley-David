//6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
const input = require('prompt-sync')()

// Entrada
const velocidade_km = Number(input('velocidade em km/h: '))

// Processamento
const velocidade_ms = velocidade_km/3.6

// Saída
console.log('Velocidade em m/s: ', velocidade_ms.toFixed(2))