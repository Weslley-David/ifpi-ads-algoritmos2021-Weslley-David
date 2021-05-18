/*43. Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo
ax + by = c
dx + ey = f

x = (ce - bf) /(ae - bd)
y = (af - cd) /(ae - bd)

Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.*/
const input = require('prompt-sync')()

// Entrada
const a = input('coeficiente (a): ')
const b = input('coeficiente (b): ')
const c = input('coeficiente (c): ')
const d = input('coeficiente (d): ')
const e = input('coeficiente (e): ')
const f = input('coeficiente (f): ')

// Processamento
 result_x = (c * e - b * f) /(a * e - b * d)
 result_y = (a * f - c * d) /(a * e - b * d)
 
// Saída
console.log('coeficiente x: ', result_x.toFixed(2))
console.log('coeficiente y: ', result_y.toFixed(2))