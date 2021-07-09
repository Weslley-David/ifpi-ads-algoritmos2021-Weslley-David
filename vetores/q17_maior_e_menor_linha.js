/*17. Leia uma matriz quadrada de ordem N e encontre a linha que possui a maior e a menor soma dos
elementos.*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Ordem da matriz: '))
    matriz = new Array(n)// cria matriz
    maior_linha = 0
    for(i = 0; i < n; i++){
        matriz[i] = new Array(n)
    }
    for(i = 0; i < n; i++){//adiciona elementos
        for (let i2 = 0; i2 < n; i2++) {
            matriz[i][i2] = Number(input(`digite um número ${i}, ${i2}: `))
        }
    }
    let soma = 0
    let menor_linha = matriz[0][0]
    for(i = 0; i < n; i++){//faz a soma dos elementos
        for (let i2 = 0; i2 < n; i2++) {
            soma = soma + matriz[i][i2] 
            if(soma > maior_linha){
                maior_linha = i
            }
            if(soma < menor_linha){
                menor_linha = i
            }
        }
    }

    console.log(matriz)
    console.log(`maior linha: ${maior_linha}`)
    console.log(`menor linha: ${menor_linha}`)
}

main()