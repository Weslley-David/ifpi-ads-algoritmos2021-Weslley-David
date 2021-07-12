/*20. Leia uma frase e faça a criptografia, retirando as vogais das palavras. O programa deverá armazenar
estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase
e mostrá-la na tela.*/
const input = require('prompt-sync')()
function main(){
const frase = input('Digite um texto: ')
let frase_criptografada = ''
i = 0
while(i < frase.length){
    if(frase[i] == 'a' || 'A' ){
        frase_criptografada = frase_criptografada + '_'
    }else{
        frase_criptografada = frase[i]
    }
    i++
}
console.log(frase_criptografada)
}
main()