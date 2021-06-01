//AINDA NÃO TERMINEI
/*29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = Number(input('Escreva um número de quatro dígitos: '))
    const raiz = Math.sqrt(numero)
    //Processamento
    if ((raiz - 1) == '1234'){
        console.log('Acesso Permitido')
    }else{
        console.log('Acesso Negado')
    }
}
main()