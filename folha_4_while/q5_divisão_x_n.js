/*5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2.*/
const input = require('prompt-sync')()
function main(){
let x = Number(input('Digite um número(x): '))
let n = Number(input('Digite um número(n): '))
let resultado = 0  
    while(n > 2){
        resultado = x/n
        console.log(`${x}/ ${n} = ${resultado.toFixed(2)}`)
        x=x/n
        n--
    }
}
main()