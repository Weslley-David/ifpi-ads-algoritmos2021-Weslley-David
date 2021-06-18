//3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.
const input = require('prompt-sync')()
function main(){
let numero_1 = Number(input('Digite um número: '))
let numero_2 = Number(input('Digite outro número: '))
let resultado = 1;
let i = 2;
    while(true){
        if(numero_1%i == 0 && numero_2%i == 0){
            numero_1 = numero_1/i
            numero_2 = numero_2/i
            resultado = i + i
            console.log(resultado)
            i++
        }
        else{
            break
        }
        i++
    }
}
main()