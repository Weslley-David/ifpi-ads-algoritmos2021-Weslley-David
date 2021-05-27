//32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
const input = require('prompt-sync')()

// Entrada
const real_numero = input('digite um numero de 3 dígitos: ')
parseInt(real_numero)
// Processamento
const inverso_numero = real_numero[2] + real_numero[1] + real_numero[0]
let resultado = real_numero - inverso_numero

// Saída
console.log(real_numero, '-', inverso_numero, '=', resultado)