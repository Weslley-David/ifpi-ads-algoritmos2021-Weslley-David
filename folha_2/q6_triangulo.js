/*6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau).*/

const input = require('prompt-sync')()
function tipo_triangulo(a1,a2,a3){
    if ((a1 < 90) && (a2 < 90) && (a3 < 90)){
        console.log('acutângulo')
    }else if((a1 == 90) || (a2 == 90) || (a3 == 90)){
        console.log('retângulo')
    }else{
        console.log('obtusângulo')
    }
    }
function main(){
    // Entrada
    const angulo_1 = Number(input('Ângulo 1: '))
    const angulo_2 = Number(input('Ângulo 2: '))
    const angulo_3 = Number(input('Ângulo 3: '))
    
    // Processamento e saída
    if (angulo_1 + angulo_2 + angulo_3 == 180){
        console.log('Os angulos formam um triângulo')
        tipo_triangulo(angulo_1, angulo_2, angulo_3)
    }else{
        console.log('Os ângulos não são capases de formar um triângulo ;-;')
    }
}
main()