/*14. Leia uma matriz quadrada de ordem N, determine e escreva o maior e o menor elemento da matriz e
suas respectivas posições (linha, coluna).*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Ordem da matriz: '))

    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = Number(input('Digite um número: '))
        }
    }
    let max = matriz[0][0], min = matriz[0][0]
    //maior valor
    for(i = 0; i < n; i++){
        for (let i2 = 0; i2 < n; i2++) {
            max = Math.max(max, matriz[i][i2])
            pos_max = i + ', ' + i2
            min = Math.min(min, matriz[i][i2])
            pos_min = i + ', ' + i2
        }
    }

    console.log(matriz)
    console.log(`Maior valor: ${max} Posição: ${pos_max}`)
    console.log(`Menor valor: ${min} Posição: ${pos_min}`)
}

main()