//1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Diga um número: '))
    const numero2 = Number(input('Diga outro número: '))
    const numero3 = Number(input('Diga mais um número: '))
    let igual // recebe o número que é igual a outro
    // Processamento
    if ((numero1 == numero2) || (numero1 == numero3)){
        igual = numero1
    }else if((numero2 == numero1) || (numero2 == numero3)){
        igual = numero2
    }else if((numero3 == numero1) || (numero3 == numero2)){
        igual = numero1
    }else {
        igual = '[Os números são todos diferentes entre si.]'
    }
    console.log('Número igual: ', igual)
}

main()