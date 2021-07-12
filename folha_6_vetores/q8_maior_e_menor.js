/*8. Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas
posições no vetor.*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Quantos números deseja conferir? '))
    var arr = new Array(n)
    //Entrada
    for(cont = 0; cont < n; cont++){
        arr[cont] = Number(input('Digite o número: '))
    }
    
    var min = arr[0]
    for(cont = 0; cont < n; cont++){//menor valor
       min = Math.min(min, arr[cont]);
    }

    var max = arr[0]
    for(cont = 0; cont < n; cont++){//maior valor
       max = Math.max(max, arr[cont]);
    }

    //Saída
    console.log('Menor elemento:', min)
    console.log('Maior elemento:', max)

}
main()  