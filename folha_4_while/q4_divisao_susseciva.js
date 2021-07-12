/*4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
resultado da última divisão efetuada.*/
const input = require('prompt-sync')()
function main(){
let numero = Number(input('Digite um número: '))
    while(numero >= 1){
        numero = numero/2
    }
    console.log('Resultado da última divisão: ',numero.toFixed(2))
}
main()