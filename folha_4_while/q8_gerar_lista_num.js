/*8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
quando a soma de dois números consecutivos da lista for igual a X.*/
const input = require('prompt-sync')()
let numero = 0, antecessor = 0
function main(){
const x = Number(input('Digite um número: '))
    while(true){
        numero = Number(input('Digite um número: '))
        if(x != numero + antecessor){
            antecessor = numero
        }else{
            break
        }
    }
}
main()