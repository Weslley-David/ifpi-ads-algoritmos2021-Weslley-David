/*16. Escreva a matriz identidade de ordem N.*/
const input = require('prompt-sync')()
function main(){
    let soma_diagonal_principal = 0
    let soma_diagonal_lateral = 0
    let soma_demais = 0
    let n = Number(input('Ordem da matriz: '))

    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            if(i == i2){
                matriz[i][i2] = 1
            } else{
                matriz[i][i2] = 0
            }
        }
    }

    

    console.log(matriz)
}

main()