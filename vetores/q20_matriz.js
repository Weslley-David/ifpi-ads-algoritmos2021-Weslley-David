/*Escreva a seguinte matriz:*/
const input = require('prompt-sync')()
function main(){
    let n = 5, numero = 1
    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = numero
            numero ++
        }
    }

    console.log(matriz)
}

main()