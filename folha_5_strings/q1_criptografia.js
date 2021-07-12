/*1. Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.*/
//Não terminada

const input = require('prompt-sync')()
function main(){
const frase = input('Digite uma frase: ')
let esarf = ""
i = frase.length -1

//inverter a frase
do{
    esarf = esarf + frase[i]
    i--
}while(i > -1)
//mostra frase invertida
console.log(esarf)
}

main()