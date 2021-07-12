/*6. Escreva um algoritmo para determinar o número de dígitos de um número informado.*/
const input = require('prompt-sync')()
function main(){
let i = 1
digitos = 1
let numero = Number(input('Digite um número: '))
    while(numero/i > 10){
        digitos = digitos + 1
        i = i * 10
    }
    console.log(`número de dígitos: ${digitos}`)
}
main()