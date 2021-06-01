//Ainda não terminei
//1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Diga um número'))
    const numero2 = Number(input('Diga outro número'))
    const numero3 = Number(input('Diga mais um número'))
    
    // Processamento
    if (numero1 == numero2){
        console.log('Os números são iguais')
    }else if(numero2 == numero3){
        console.log('Os números são iguais')
    }else if(numero1 == numero3){
        console.log('Os números são iguais')
    }else{
        console.log('Os números são diferentes')
    }
    
}

main()