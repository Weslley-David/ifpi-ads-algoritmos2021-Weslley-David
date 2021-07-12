/*23. Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
escreva os N termos da PG. Ler o valor de N.*/
const input = require('prompt-sync')()
function main(){
let razao = Number(input('Razão: '))
let primeiro_termo = Number(input('Primeiro Termo  : '))
let n_termo = Number(input('Quantidade de termos que deseja gerar  : '))
let i = 1;

console.log(`${primeiro_termo}`)

while(n_termo > i){
    proximo_termo = primeiro_termo * razao
    console.log(`${proximo_termo}`)
    primeiro_termo = proximo_termo
    i++
}
}
main()