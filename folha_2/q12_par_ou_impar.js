//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.
/*11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log("Insira uma data")
    const numero = Number(input('Digite um número: '))

    if(numero%2 == 0){
        console.log('É um número par')
    }else{
        console.log('É um número impar')
    }
}
main()