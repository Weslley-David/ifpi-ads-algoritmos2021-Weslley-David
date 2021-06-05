//9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = input('Escreva um número (intervalo de 1 a 100): ')
    
    // Processamento e saída
    if (numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13 || numero == 17 || numero == 19 || numero == 23 || numero == 29 || numero == 31 || numero == 37 || numero == 41 || numero == 43 || numero == 47 || numero == 53 || numero == 59 || numero == 61 || numero == 67 || numero == 71 || numero == 73 || numero == 79 || numero == 83 || numero == 89 || numero == 97){
        console.log(numero ,' é primo')
    }else{
        console.log(numero,' não é primo')
    }
}
main()