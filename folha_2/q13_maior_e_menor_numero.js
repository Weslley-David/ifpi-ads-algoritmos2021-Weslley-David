//AINDA NÃO FIZ
//13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Número 1: '))
    const numero2 = Number(input('Número 2: '))
    const numero3 = Number(input('Número 3: '))
    const numero4 = Number(input('Número 4: '))
    const numero5 = Number(input('Número 5: '))
    
    // Processamento e saída
    if (numero1 > numero2){
        console.log('maior: ',numero1)
        console.log('menor: ',numero2)
    }else if (numero1 < numero2){
        console.log('maior: ',numero2)
        console.log('menor: ',numero1)
    }else{
        console.log('Os números são iguais.')
    }
}
main()