/*20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const angulo = Number(input('Ângulo (em graus): '))
    
    //Processamento
    if (angulo <= 90){
        console.log('Primeiro Quadrante')
    }else if(angulo > 90 && angulo <= 180){
        console.log('Segundo Quadrante')
    }else if(angulo > 180 && angulo <= 270){
        console.log('Terceiro Quadrante')
    }else if(angulo > 270 && angulo <= 360){
        console.log('Quarto Quadrante')
    }else{
        console.log('Grau Inválido')
    }
}
main()