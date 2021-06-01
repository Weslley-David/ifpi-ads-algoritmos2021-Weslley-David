/*21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = Number(input('Digite um número: '))
    const parte_decimal = numero - parseInt(numero)
    const parte_inteira = parseInt(numero)
    //Processamento
    if ( parte_decimal >= 0.5){
        console.log(parte_inteira + 1)
    }else{
        console.log(parte_inteira)
    }
}
main()