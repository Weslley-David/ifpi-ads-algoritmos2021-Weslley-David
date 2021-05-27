/*41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/
const input = require('prompt-sync')()

// Entrada
const custo_fabrica = input('Custo de Fábrica do carro:')//27%

// Processamento
const custo_corrigido = (custo_fabrica * 100/27)

// Saída
console.log('Custo com correções monetárias: ', custo_corrigido.toFixed(3))