/*10. Escreva os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...). .*/
const input = require('prompt-sync')()
function main(){
    let n = Number(input('Quantos números deseja conferir? ')) - 2
    anterior_1 = 0
    anterior_2 = 1
    //Entrada
    console.log('0')
    console.log('1')
    for(cont = 0; cont < n; cont++){
        resultado = anterior_1 + anterior_2
        console.log(resultado)
        anterior_1 = anterior_2
        anterior_2 = resultado
    }
}
main()  