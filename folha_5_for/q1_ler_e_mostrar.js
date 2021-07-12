//1. Leia N e escreva todos os números inteiros de 1 a N.
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Insira um número: '))
    for(i = 1; i < n + 1; i++){//adiciona elementos
        console.log(i)
    }
}

main()