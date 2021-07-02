/*10. Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.*/
const input = require('prompt-sync')()
function main(){
const palavra = input('Digite uma palavra: ')
let arvalap = ''
i = palavra.length - 1
for(i ; 0 <= i; i--){
    arvalap = arvalap + palavra[i]
}
if(palavra == arvalap){
    console.log(`${palavra} é palíndroma`)
}else{
    console.log(`${palavra} NÃO é palíndroma`)
}
}
main()