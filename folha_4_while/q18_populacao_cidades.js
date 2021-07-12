/*18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.*/
const input = require('prompt-sync')()
function main(){
let cidade_a = 200000
let cidade_b = 800000
let anos = 0
    while(cidade_a <= cidade_b){
        cidade_a = cidade_a + (cidade_a * 3.5)/100
        cidade_b = cidade_b + (cidade_b * 1.35)/100
        anos = anos + 1
    }
    console.log('Quantidade de anos para que a população de b seja superada: ', anos)
}
main()