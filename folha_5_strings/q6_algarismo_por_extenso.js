/*6. Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.*/
const input = require('prompt-sync')()
function main(){
const frase = input('Digite uma frase: ')
const palavas = frase.split(' ')
i = 0
for(i ; i < palavas.length; i++){//.stringfromcharcode
    console.log(palavas[i])
}
}
main()