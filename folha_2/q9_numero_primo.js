//AINDA NÃO TERMINEI
//9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = input('Escreva um número (intervalo de 1 a 100): ')
    
    // Processamento e saída
    if (numero[0] == numero[1]){
        console.log('Desena igual a unidade')
    }else{
        console.log('Algarismos diferentes entre si')
    }
}
main()