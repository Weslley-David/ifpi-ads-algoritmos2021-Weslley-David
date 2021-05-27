//22. Leia um valor em km, calcule e escreva o equivalente em m.
const input = require('prompt-sync')()

// Entrada
const distancia_km = Number(input('distância em km: '))

// Processamento
const distancia_ms = distancia_km*1000

// Saída
console.log('distância em m: ', distancia_ms.toFixed(2))