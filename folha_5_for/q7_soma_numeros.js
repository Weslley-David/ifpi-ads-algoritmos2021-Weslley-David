/*7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.*/
const input = require('prompt-sync')()
function main(){
    let resultado = 0
    let limite = Number(input('Insira um valor: '))
    for(i = 0; i <= limite; i++){//adiciona elementos
        resultado = resultado + i
    }
    console.log(resultado)
}

main()