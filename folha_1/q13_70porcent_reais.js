//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.
const input = require('prompt-sync')()

// Entrada
const reais = Number(input('Oi, diga um valor em reais: '))

// Processamento
const realporcent = (reais * 70)/100

// Saída
console.log('70% desse valor equivale a: ', realporcent)