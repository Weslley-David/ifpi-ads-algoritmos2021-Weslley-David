/*4. Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.*/
const input = require('prompt-sync')()
function main(){
const frase = input('Digite uma frase: ')
let i = 0
let frase_duplicada = ''
 while(i < frase.length){
     frase_duplicada = frase_duplicada + (frase[i] + frase[i])
     i++
 }

    console.log(frase_duplicada)
}
main()