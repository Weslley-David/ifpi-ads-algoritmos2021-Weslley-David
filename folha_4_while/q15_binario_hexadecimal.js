/*15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.*/

const input = require('prompt-sync')()
function main(){
let numero = Number(input('Digite um número (0 a 255): '))
numero_bin = numero
numero_hex = numero
let binario = '_'
let hexadecimal = '_'
    while(numero_bin >= 1){
        binario = binario + String(numero_bin%2)
        numero_bin = Math.floor(numero_bin/2)
    }
    console.log(`binario: ${binario.split('').reverse().join('')}`)

    //Ainda falta a parte de hexadecimal

}
main()