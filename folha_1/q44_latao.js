/*44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/
const input = require('prompt-sync')()

// Entrada
const latao = input('Indique uma quantidade de latão em Quilograma(Kg): ')

// Processamento
 zinco = latao * 30/100
 cobre = latao * 70/100
 
// Saída
console.log('zinco: ', zinco.toFixed(2), ' kg necesários.')
console.log('cobre: ', cobre.toFixed(2), ' kg necesários.')