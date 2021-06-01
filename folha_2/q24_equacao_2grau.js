/*24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log('Equação do 2 Grau')
    const a = Number(input('Coeficiente a: '))
    const b = Number(input('Coeficiente b: '))
    const c = Number(input('Coeficiente c: '))
    if(a == 0){
        console.log('valor de "a" inválido.')
    }else{
        const delta = Math.pow(b,2)-4 * a * c
        console.log('Delta: ', delta)
        const raiz_1 = ((b - 2*b) + Math.sqrt(delta))/(2 * a)
        const raiz_2 = ((b - 2*b) - Math.sqrt(delta))/(2 * a)
        console.log('X1: ', raiz_1)
        console.log('X2: ', raiz_2)
    }
}
main()