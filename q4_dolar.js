//4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
const input = require('prompt-sync')()

// Entrada
const dolar_cota = Number(input('Entre com a cotação em dóllar : '))
const dolar_valor = Number(input('Entre com quantidade em dóllar: '))

// Processamento
const valor_real= dolar_cota * dolar_valor

// Saída
console.log('O valor em reais correspode a: ', valor_real.toFixed(2))
