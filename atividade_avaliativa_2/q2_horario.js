/*Leia um horário no formato hh:mm:ss e escreva o resultado na
seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)*/
const input = require('prompt-sync')()
function main(){
const tempo = input('Digite uma string no formato hh:mm:ss: ')
console.log(`${tempo.substr(0,2)} horas, ${tempo.substr(2,2)} minutos e ${tempo.substr(4,5)} segundos`)
}
main()