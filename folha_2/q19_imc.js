/*19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const altura = Number(input('Digite sua altura: '))
    const peso = Number(input('Digite seu peso: '))
    
    imc = (peso/Math.pow(altura,2))
    //Processamento
    if (imc < 25){
        console.log('Peso normal')
    }else if(imc >= 25 && imc <=30){
        console.log('Obesidade')
    }else{
        console.log('Obesidade Mórbida')
    }
}
main()