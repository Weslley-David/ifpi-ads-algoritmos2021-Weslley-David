/*6. Leia um número (vetor com 8 elementos) na base binária, calcule e escreva este número na base
hexadecimal e na base decimal.*/
const input = require('prompt-sync')()
function main(){
    let decimal = 0, i = 0, hexadecimal = ''
    binario = input('Digite um número de base 2 (8 algarismos): ')
    
    for (let index = 7; index >= 0; index--) {
       decimal = decimal + (Number(binario[i]) * Math.pow(2, index))
       i++
    }
    console.log('decimal: ', decimal)
    

}
main()