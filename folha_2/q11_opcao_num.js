/*11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log("Insira uma data")
    const num1 = Number(input('Digite um número: '))
    const num2 = Number(input('Digite um número: '))
    const num3 = Number(input('Digite um número: '))
    const opcao = Number(input('Digite a posição do valor que deseja ver: '))

    if(0 < opcao && opcao <= 3){
        if(opcao == 1){
            console.log(num1)
        }
        if(opcao == 2){
            console.log(num2)
        }
        if(opcao == 3){
            console.log(num3)
        }
    }else{
        console.log('posição inválida')
    }
}
main()