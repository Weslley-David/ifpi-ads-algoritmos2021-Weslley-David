/*22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const hora_1 = Number(input('Digite um número: '))
    const minutos_1 = Number(input('Digite um número: '))
    const hora_2 = Number(input('Digite um número: '))
    const minutos_2 = Number(input('Digite um número: '))
    
    const parte_decimal = numero - parseInt(numero)
    const parte_inteira = parseInt(numero)
    //Processamento
    if ( parte_decimal >= 0.5){
        console.log(parte_inteira + 1)
    }else{
        console.log(parte_inteira)
    }
}
main()