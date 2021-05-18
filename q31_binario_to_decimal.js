//31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
const input = require('prompt-sync')()

// Entrada
const binario = input('digite 4 unidades em binário [0/1]: ')

// Processamento
let decimal = ((binario[0]*2**3)+(binario[1]*2**2)+(binario[2]*2**1)+(binario[3]*2**0))

// Saída
console.log('Numero em decimal: ', decimal)