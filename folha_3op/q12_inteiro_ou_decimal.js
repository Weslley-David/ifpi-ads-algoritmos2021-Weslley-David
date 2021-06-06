/*12. Leia um número e escreva se o número é inteiro ou decimal.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = Number(input('Digite um número: '))

    // Processamento
    if (numero%1 == 0){
        console.log('número inteiro')
    }else{
        console.log('número decimal')
    }
}
main()