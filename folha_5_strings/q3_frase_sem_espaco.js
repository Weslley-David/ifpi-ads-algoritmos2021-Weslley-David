/*3. Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.*/
const input = require('prompt-sync')()
function main(){
const frase = input('Digite uma frase: ')
let frase_vetor = frase.split(' ')
    frase_sem_espaco = frase_vetor.join('')

    console.log(frase_sem_espaco)
}
main()