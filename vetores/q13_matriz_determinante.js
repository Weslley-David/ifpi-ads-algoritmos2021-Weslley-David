/*13. Leia uma matriz quadrada de ordem N, calcule e escreva seu determinante.*/
const input = require('prompt-sync')()
function main(){
    let soma_diagonal_principal = 0
    let soma_diagonal_lateral = 0
    let soma_demais = 0
    let n = 2

    matriz = new Array(n)// cria matriz
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = Number(input('Elementos: '))
        }
    }
    resultado = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0] 
    console.log(resultado)
}
main()