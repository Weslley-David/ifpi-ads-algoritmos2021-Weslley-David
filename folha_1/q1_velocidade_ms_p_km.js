//1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
const input = require('prompt-sync')()

// Entrada
const velocidade_ms = Number(input('velocidade em m/s: '))

// Processamento
const velocidade_km = velocidade_ms * 3.6

// Saída
console.log('Velocidade em km/h: ', velocidade_km.toFixed(2))