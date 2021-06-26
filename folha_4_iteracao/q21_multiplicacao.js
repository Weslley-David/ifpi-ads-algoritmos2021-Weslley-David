/*21. Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado*/
const input = require('prompt-sync')()
function main(){
let numero_1 = Number(input('Digite um número: '))
let numero_2 = Number(input('Digite outro número: '))
let resultado = 0
let i = 0;
while(i < numero_1){
    resultado = resultado + numero_2 
    i++
}
console.log(`resultado = ${resultado}`)
}
main()