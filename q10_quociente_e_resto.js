//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Entre com um número: '))
const numero_2 = Number(input('Mais uma vez: '))

// Processamento
    const quociente = (numero_1/numero_2)
    const resto = (numero_1%numero_2)
// Saída
console.log(numero_1,'/', numero_2,'= ', quociente.toFixed(2))
console.log('Resto: (', resto.toFixed(2),')')