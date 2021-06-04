/*7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero). */
const input = require('prompt-sync')()
function tipo_triangulo(a1,a2,a3){
    if ((a1 == a2) && (a2 == a3)){
        console.log('triângulo equilátero.')
    }else if((a1 != a2) && (a2 != a3) && (a1 != a3)){
        console.log('Escaleno')
    }else{
        console.log('Isósceles')
    }
    }
function main(){
    // Entrada
    const lado_1 = Number(input('Lado 1: '))
    const lado_2 = Number(input('Lado 2: '))
    const lado_3 = Number(input('Lado 3: '))
    
    // Processamento e saída
    if (lado_1 + lado_2 > lado_3){
        console.log('Os lados formam um triângulo')
        tipo_triangulo(lado_1, lado_2, lado_3)
    }else{
        console.log('Os lados não são capases de formar um triângulo ;-;')
    }
}
main()