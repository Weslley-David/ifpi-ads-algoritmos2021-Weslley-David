//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
const input = require('prompt-sync')()

// Entrada
const quilograma = Number(input('Entre com um valor em kg(quilograma): '))

// Processamento
const grama = quilograma * 1000

// Saída
console.log('Peso em grama: ', grama.toFixed(3))