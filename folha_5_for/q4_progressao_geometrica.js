/*4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R.*/
const input = require('prompt-sync')()
function main(){
    let a0 = Number(input('Insira um valor de início: '))
    let limite = Number(input('Insira um valor final: '))
    let razao = Number(input('Insira uma razão: '))
    for(i = a0; i <= limite; i = i * razao){//adiciona elementos
        console.log(i)
    }
}

main()