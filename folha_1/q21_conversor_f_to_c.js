//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
const input = require('prompt-sync')()

// Entrada
console.log('=== Conversor F° para C° ===')
const fahrenheit = Number(input('diga o valor em F°: '))

// Processamento
const celsius = (5 * fahrenheit - 160) / 9

// Saída
console.log('Temperatura em celsius: ', celsius.toFixed(2))