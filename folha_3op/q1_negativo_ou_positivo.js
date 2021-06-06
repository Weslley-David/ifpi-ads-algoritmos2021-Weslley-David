//1. Leia um número e mostre na tela se o número é positivo ou negativo.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Diga um número: '))
    // Processamento
    if (numero1 > 0){
        console.log('O número é positivo')
    }else if(numero1 < 0){
        console.log('O número é negativo')
    }else{
        console.log('O número é igual a 0')
    }
}
main()