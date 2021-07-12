/*12. As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último
sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por
Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.*/
const input = require('prompt-sync')()
function main(){
const nome_completo = input('Nome completo: ')
nome_separado = nome_completo.split(' ')
console.log(nome_separado[nome_separado.length - 1], '/' ,nome_separado[0])
}
main()