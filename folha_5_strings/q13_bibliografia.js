/*13. As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro,
texto etc., exigem que o nome do autor seja escrito no formato último 
sobrenome, sequência das primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. 
Por exemplo, Antonio Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o
escreva no formato de bibliografia.*/
const input = require('prompt-sync')()
function main(){
const nome_completo = input('Nome completo: ')
let abreviaturas = ''
nome_separado = nome_completo.split(' ')
i = 0
while(i < nome_separado.length - 1){
    abreviaturas = abreviaturas + (nome_separado[i][0] + '.')
    i++
}
console.log(nome_separado[nome_separado.length - 1],', ',abreviaturas, '.')
}

main()