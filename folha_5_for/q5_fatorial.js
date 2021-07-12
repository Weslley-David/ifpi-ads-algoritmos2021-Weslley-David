/*5. Leia um número, calcule e escreva seu fatorial.*/
const input = require('prompt-sync')()
function main(){
    let resultado = 1
    let i = Number(input('Insira um valor de início: '))
    for(i ; i >= 1; i--){//adiciona elementos
        resultado = resultado * i
    }
    console.log('fatorial: ', resultado)
}

main()