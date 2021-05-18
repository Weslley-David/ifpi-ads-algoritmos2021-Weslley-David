//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
const input = require('prompt-sync')()

// Entrada
const minutos = Number(input('Entre um valor em minutos: '))

// Processamento
let resultado_horas = minutos/60
let resultado_minutos = resultado_horas - Math.trunc(resultado_horas)
resultado_horas = Math.trunc(resultado_horas)
    //Tratando minutos para ficar mais legível
    resultado_minutos = parseFloat((60 * resultado_minutos).toFixed(2))
// Saída
console.log(minutos,' minutos equivalem a : ', resultado_horas,' horas e ', resultado_minutos ,'minutos.')
//console.log(resultado_minutos)