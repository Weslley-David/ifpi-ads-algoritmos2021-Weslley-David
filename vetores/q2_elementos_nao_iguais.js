/*2. Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Quantos números deseja conferir? '))
    let elementos = new Array(n)
    let elementos_repetido = 0
    for (let index = 0; index < n; index++) {
        elementos[index]= input('Elementos: ')
        
    }

    for (let index = 0; index < n; index++) {
        for (let index2 = 0; index2 < n; index2++) {
            if((index != index2) && (elementos[index] == elementos[index2])){
                elementos_repetido = true
                break
            }
        }
    }
    if(elementos_repetido == true){
        console.log('Há elementos repetidos.')
    }else{
        console.log('Não há elementos repetidos.')
    }
}
main()