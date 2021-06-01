//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log("Insira uma data")
    const numero = Number(input('Digite um número: '))

    if(numero%2 == 0){
        console.log('É um número par')
    }else{
        console.log('É um número impar')
    }
}
main()