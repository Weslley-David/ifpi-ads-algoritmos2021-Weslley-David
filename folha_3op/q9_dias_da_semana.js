/*9. Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const dia = Number(input('Indique um número (de 0 a 7): '))
    // Processamento
    if (dia == 1){
        console.log('1 - Domingo.')
    }else if (dia == 2){
        console.log('2 - Segunda.')
    }else if (dia == 3){
        console.log('3 - Terça.')
    }else if (dia == 4){
        console.log('4 - Quarta.')
    }else if (dia == 5){
        console.log('5 - Quinta.')
    }else if (dia == 6){
        console.log('6 - Sexta.')
    }else if (dia == 7){
        console.log('7 - Sábado.')
    }else{
        console.log('Data inválida.')
    }
}
main()