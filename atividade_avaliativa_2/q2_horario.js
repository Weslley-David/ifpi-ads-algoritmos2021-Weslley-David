/*Leia um horário no formato hh:mm:ss e escreva o resultado na
seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)*/
const input = require('prompt-sync')()
function main(){
const tempo = input('Digite uma string no formato hh:mm:ss: ')
if(tempo[2] == ':'){
    hora = tempo[0] + tempo[1]
    minuto = tempo[3] + tempo[4]
    segundo = tempo[6] + tempo[7]
}else{
    hora = tempo[0] + tempo[1]
    minuto = tempo[2] + tempo[3]
    segundo = tempo[4] + tempo[5]
}
console.log(`${hora} horas, ${minuto} minutos e ${segundo} segundos`)
}

main()