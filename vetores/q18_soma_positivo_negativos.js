/*q18_soma_positivo_negativos.js*/
/*12. Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos elementos da diagonal principal,
a soma dos elementos da diagonal secundária e a soma dos elementos que não estão na diagonal
principal nem na diagonal secundária*/
//incompleta
const input = require('prompt-sync')()
function main(){
    let soma_negativo = 0
    let soma_positivo = 0
    let n = Number(input('Ordem da matriz: '))

    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = Number(input(`Diga um número: `))
        }
    }

    //soma diagonal principal
    for(i = 0; i < n; i++){
        for (let i2 = 0; i2 < n; i2++) {
            if(matriz[i][i2] < 0){
                soma_negativo = soma_negativo + matriz[i][i2]
            }else{
                soma_positivo = soma_positivo + matriz[i][i2]
            }
        }
    }


    console.log(matriz)
    console.log('Soma dos negativos: ',soma_negativo)
    console.log('Soma dos positivos: ',soma_positivo)
}

main()