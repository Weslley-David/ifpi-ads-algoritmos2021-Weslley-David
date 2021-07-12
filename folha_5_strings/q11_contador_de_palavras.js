/*11. Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de
palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.*/
const input = require('prompt-sync')()
function main(){
const frase = input('Digite um texto: ')
palavras = frase.split(' ')
console.log(`O texto contém ${palavras.length} palavras.`)
}
main()