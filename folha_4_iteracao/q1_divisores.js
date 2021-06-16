/*1. Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/
const input = require('prompt-sync')()
function main(){
//Entrada
    let i = 0;
    quantidade_de_numeros = Number(input('Quantos números deseja conferir? '))
    let numeros = new Array(quantidade_de_numeros)

    while(i < quantidade_de_numeros){
        numeros[i] = Number(input('Digite o número: '))
        i++
    }
    //numeros[i] armazena os números
    //quantidade de números armazena as voltas no loop
    i = 0;

//Processamento
while(i < quantidade_de_numeros){
    divisor(numeros[i])
    i++
    }
}
function divisor(divisor){
    let cont = 0
    while(cont <= divisor){
        if(divisor%cont == 0){
//Saída
            console.log(divisor,' divisível por',cont)
        }
        cont++
    }
    console.log('-----------------------------------')
}
main()