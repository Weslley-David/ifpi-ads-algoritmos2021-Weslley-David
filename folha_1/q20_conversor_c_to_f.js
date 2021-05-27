//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
const input = require('prompt-sync')()

// Entrada
console.log('=== Conversor C° para F° ===')
const celsius = Number(input('diga o valor em C°: '))

// Processamento
const fahrenheit = (9 * celsius + 160) / 5

// Saída
console.log('temperatura em fahrenheit: ', fahrenheit.toFixed(2))