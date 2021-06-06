/*15. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const morango = Number(input('morango (kg): '))
    const maca = Number(input('maçãs (kg):  '))

    // Processamento
    if (morango >= 5 ){
        valor_total = morango * 2.50
    }else{
        valor_total = morango * 2.20
    }

    if (maca >= 5 ){
        valor_total = valor_total + morango * 1.80
    }else{
        valor_total = valor_total + morango * 1.50
    }

    if (valor_total > 25 || (morango + maca) > 8) {
        valor_total = valor_total + (valor_total*10/100)
    }
    console.log('valor total a ser pago: ', valor_total)
}
main()