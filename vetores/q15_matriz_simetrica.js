/*15. Leia uma matriz quadrada de ordem N e escreva se ela é ou não simétrica. Uma matriz quadrada é dita
simétrica se A[i,j] =A[j,i].*/
const input = require('prompt-sync')()
function main(){
    let n = 2

    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = Number(input(`Digite o termo ${i}, ${i2} :`))
        }
    }
    let max = matriz[0][0], min = matriz[0][0]
    //maior valor
    if(matriz[0][0] == matriz[1][1] && matriz[1][0] == matriz[0][1]){
        console.log('quadrado')
    }

    console.log(matriz)
}

main()