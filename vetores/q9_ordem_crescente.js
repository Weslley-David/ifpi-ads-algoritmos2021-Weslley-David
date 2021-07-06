/*Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente.*/
//errado
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Quantos números deseja conferir? '))
    let vetor = new Array(n)
    let vetor2 = new Array(n)
    
    //Entrada
    for(cont = 0; cont < n; cont++){
        vetor[cont] = Number(input('Digite o número: '))
    }

    let min = vetor[0]

    for (let i = 0; i < n; i++) {
        for(i2 = 0; i2 < n; i2++){
            min = Math.min(min, vetor[i2]);
        }
        vetor2[i] = min
    }
    console.log(vetor)
    console.log(vetor2)
}
main()