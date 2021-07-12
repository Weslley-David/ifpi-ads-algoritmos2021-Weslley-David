/*2. Leia N e escreva todos os números inteiros pares de 1 a N.*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Insira um número: '))
    for(i = 2; i < n + 1; i = i + 2){//adiciona elementos
        console.log(i)
    }
}

main()