/*7. Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição:
se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Quantos números deseja conferir? '))
    let a = new Array(n)
    let b = new Array(n)
    let elementos_repetido = 0
    for (let index = 0; index < n; index++) {
        a[index]= input('Elementos: ')
        
    }

    for (let index = 0; index < n; index++) {
        if(a[index]%2 == 0){
            b[index] = 0
        }
        else{
            b[index] = 1
        }
    }
    console.log(a)
    console.log(b)
}
main()