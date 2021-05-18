/*33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).*/
const input = require('prompt-sync')()

// Entrada
const real_numero = input('digite um numero de 3 dígitos: ')
// Processamento
const inverso_numero = real_numero[2] + real_numero[1] + real_numero[0]
resultado = parseInt(real_numero) + parseInt(inverso_numero)

// Saída
console.log(real_numero, '-', inverso_numero, '=', resultado)