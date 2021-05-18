//2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
const input = require('prompt-sync')()

// Entrada
const hora = Number(input('Entre com Horas: '))
const minutos = Number(input('Entre com minutos: '))

// Processamento
const minutos_resultado = (hora*60) + minutos

// Saída
console.log('O total de minutos equivale a: ', minutos_resultado)