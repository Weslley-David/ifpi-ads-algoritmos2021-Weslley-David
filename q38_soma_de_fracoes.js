//  AINDA NÃO TERMINEI
/*38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração.*/
const input = require('prompt-sync')()

// Entrada
const numerador_1 = Number(input('primeiro numerador: '))
const denominador_1 = Number(input('primeiro denominador: '))

const numerador_2 = Number(input('segundo numerador: '))
const denominador_2 = Number(input('segundo numerador: '))

// Processamento
const numerador_result = (denominador_2 * numerador_1) + (denominador_1 * numerador_2)
const denominador_result = denominador_1 * denominador_2

// Saída
console.log('resultado:')
console.log(numerador_result)
console.log('-----')
console.log(denominador_result)