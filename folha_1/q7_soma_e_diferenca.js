//7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Entre com um número: '))
const numero_2 = Number(input('Mais uma vez: '))
const numero_3 = Number(input('Só mais um: '))

// Processamento
const resultado_soma = (numero_1 + numero_2)
const resultado_diferenca = (numero_2 - numero_3)

// Saída
console.log(numero_1, '+', numero_2, '=', resultado_soma.toFixed(2))
console.log(numero_2, '-', numero_3, '=', resultado_diferenca.toFixed(2))