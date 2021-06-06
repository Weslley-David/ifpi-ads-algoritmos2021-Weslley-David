/*14. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const litros = Number(input('Litros: '))
    const combustivel = input('Combustível (a - álcool | g - gasolina): ')
    let valor = 0
    if (combustivel == 'a') {
        if (litros >= 20) {
            valor = ((combustivel * 1.90) * 3/100)
            console.log('valor a ser pago: ', valor)
        } else {
            valor = (combustivel * 1.90) * 5/100
            console.log('valor a ser pago: ', valor)
        }    
    } else {
        if (litros >= 20) {
            valor = (combustivel * 1.90) * 4/100
            console.log('valor a ser pago: ', valor)
        } else {
            valor = (combustivel * 1.90) * 6/100
            console.log('valor a ser pago: ', valor)
        }
    }
}
main()