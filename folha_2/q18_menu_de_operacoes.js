/*18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero_1 = Number(input('Digite um número: '))
    const numero_2 = Number(input('Digite outro número: '))
    console.log('1 - adicao')
    console.log('2 - subtração')
    console.log('3 - multiplicação')
    console.log('4 - Divisão')
    const operacao = Number(input('Digite o numero que corresponde a operação que deseja executar: '))
    
    //Processamento
    if (operacao == 1){
        resultado = numero_1 + numero_2
        console.log(resultado)
    }else if(operacao == 2){
        resultado = numero_1 - numero_2
        console.log(resultado)
    }else if(operacao == 3){
        resultado = numero_1 * numero_2
        console.log(resultado)
    }else if(operacao == 4){
        resultado = numero_1/numero_2
        console.log(resultado)
    }else{
        console.log('opção não válida')
    }
}
main()