//11. Leia uma matriz quadrada de ordem N, calcule e escreva sua matriz transposta..
const input = require('prompt-sync')()
function main(){
    let transpor = 0
    let n = Number(input('Ordem da matriz: '))

    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    matriz_2 = new Array(n)//cria matriz_a 
    for(i = 0; i < n; i++){
        matriz_2[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = i2 + 1
        }
    }
    for(i = 0; i < n; i++){
        for (let i2 = 0; i2 < n; i2++) {
            matriz_2[i][i2] = matriz[transpor][transpor]
        }
        transpor ++
    }

    console.log(matriz)
    console.log(matriz_2)
}

main()  