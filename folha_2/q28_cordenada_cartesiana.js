/*28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const x = Number(input('ponto x: '))
    const y = Number(input('ponto y: '))
    
    //Processamento
    if ( x <= 0 || y <= 0){
        console.log('Valores inválidos para cálculo de área')
    }else{
        const area = x*y
        console.log('area equivale a: ', area)
    }
}
main()