//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
const input = require('prompt-sync')()

// Entrada
const nota1 = Number(input('Nota 1 do aluno: '))
const peso1 = Number(input('Peso Correspondente: '))

const nota2 = Number(input('Nota 2 do aluno: '))
const peso2 = Number(input('Peso Correspondente: '))

const nota3 = Number(input('Nota 3 do aluno: '))
const peso3 = Number(input('Peso Correspondente: '))

// Processamento
const media_ponderada = ((nota1*peso1) + (nota2*peso2) + (nota3*peso3))/ (peso1 + peso2 + peso3)

// Saída
console.log('média poderada: ', media_ponderada.toFixed(2))