/*22. Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
de divisão (/ e %) sejam utilizados.*/
const input = require('prompt-sync')()
function main(){
let dividendo = Number(input('Dividendo: '))
let divisor = Number(input('Divisor  : '))
let i = 0;
while((divisor * i < dividendo) || (divisor*i != dividendo) ){

    i++
}
console.log(`resultado = ${i}`)
console.log(`resto = ${(divisor * i) - dividendo}`)
}
main()