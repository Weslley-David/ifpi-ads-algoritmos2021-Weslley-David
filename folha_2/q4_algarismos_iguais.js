//4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero = input('Escreva um números de dois dígitos: ')
    
    // Processamento e saída
    if (numero[0] == numero[1]){
        console.log('Desena igual a unidade')
    }else{
        console.log('Algarismos diferentes entre si')
    }
}
main()