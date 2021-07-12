/*16. Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.:
diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.*/
const input = require('prompt-sync')()
function diagonal(nome){
    nome.length
    let i = 0
    let espaco = ''
    while(i <= nome.length - 1){
        espaco = espaco + ' '
        console.log(espaco, nome[i])
        i++
    }
}
function main(){
    const nome = input('Escreva algo (max 20 char): ')

    diagonal(nome)
}
main()