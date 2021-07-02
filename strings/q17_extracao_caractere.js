/*17. Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto,
10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.*/
const input = require('prompt-sync')()
function substr(nome, inicio, final){
    inicio = inicio - 1
    console.log(nome.substr(inicio,final))
    
}
function main(){
    const nome = input('Escreva algo: ')
    const inicio = input('Início do corte: ')
    const final  = input('Final do corte: ')

    substr(nome, inicio, final)
}
main()