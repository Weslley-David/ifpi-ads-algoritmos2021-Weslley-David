/*42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.*/
const input = require('prompt-sync')()

// Entrada
const ponto1_x = input('ponto 1(x):')
const ponto1_y = input('ponto 1(y):')

const ponto2_x = input('ponto 2(x):')
const ponto2_y = input('ponto 2(y):')

// Processamento
const distancia = Math.sqrt((ponto2_x - ponto1_x)**2 + (ponto2_y - ponto1_y)**2)

// Saída
console.log('Distância: ', distancia.toFixed(2))