/*2. Leia uma frase e mostre cada palavra da frase em uma linha separada*/
const input = require('prompt-sync')()
function main(){
const frase = input('Digite uma frase: ')
const palavas = frase.split(' ')
i = 0
for(i ; i < palavas.length; i++){
    console.log(palavas[i])
}
}
main()