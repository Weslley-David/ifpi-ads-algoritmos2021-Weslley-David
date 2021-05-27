//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
const input = require('prompt-sync')()

// Entrada
var dias = Number(input('Quantos dias de vida você tem?  '))

// Processamento
let anos = (dias/365)
dias = (dias%365)
let meses = (dias/30)
dias = (dias%30)

// Saída
console.log('Anos :', Math.floor(anos))
console.log('Meses:', Math.floor(meses))
console.log('Dias :', Math.floor(dias))