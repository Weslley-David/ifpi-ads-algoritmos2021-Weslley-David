//7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
const input = require('prompt-sync')()
function main(){
let chute_numero = 0
const numero = Number(input('Digite um número inteiro: '))
    while(numero != chute_numero){
        chute_numero = chute_numero + 1
    }
    console.log('números igual a: ',chute_numero)
}
main()