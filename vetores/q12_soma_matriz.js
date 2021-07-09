/*12. Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos elementos da diagonal principal,
a soma dos elementos da diagonal secundária e a soma dos elementos que não estão na diagonal
principal nem na diagonal secundária*/
//incompleta
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
            matriz[i][i2] = i2 + 1
        }
    }

    //soma diagonal principal
    for(i = 0; i < n; i++){
        for (let i2 = 0; i2 < n; i2++) {
            if(i == i2){
                soma_diagonal_principal = soma_diagonal_principal + matriz[i][i2]
            }
        }
    }

    //soma diagonal lateral
    for(i = 0; i < n - 1; i++){
        for (let i2 = 0; i2 < n - 1; i2++) {
            if(i == i2){
                soma_diagonal_lateral = soma_diagonal_lateral + matriz[i][i2 + 1]
                soma_diagonal_lateral = soma_diagonal_lateral + matriz[i + 1][i2]
            }
        }
    }
    //soma demais //não sei se esssa parte está funcionando corretamente...
    for(i = 0; i < n - 1; i++){
        for (let i2 = 0; i2 < n - 1; i2++) {
            if(i == i2){
                continue;
            }
            else if(i - 1 == i2){
                continue;
            }
            else if(i == i2 -1){
                continue;
            }
            else{
                soma_demais = soma_demais + matriz[i][i2]
            }
        }
    }

    console.log(matriz)
    console.log(soma_diagonal_principal)
    console.log(soma_diagonal_lateral)
    console.log(soma_demais)
}

main()