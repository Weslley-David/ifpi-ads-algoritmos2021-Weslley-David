//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
const input = require('prompt-sync')()

// Entrada
const salario = Number(input('Oi, qual seu salário?: '))

// Processamento
const novosalario = (salario + (salario * 25)/100)

// Saída
console.log('Seu novo salário será: ', novosalario)