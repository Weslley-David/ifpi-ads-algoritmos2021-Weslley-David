/*15. Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.:
vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.*/
const input = require('prompt-sync')()
function vertical(nome){
    nome.length
    let i = 0
    while(i <= nome.length - 1){
        console.log(nome[i])
        i++
    }
}
function main(){
    const nome = input('Escreva algo (max 20 char): ')

    vertical(nome)
}
main()