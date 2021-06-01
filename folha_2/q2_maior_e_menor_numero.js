//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Diga um número: '))
    const numero2 = Number(input('Diga outro número: '))
    
    // Processamento e saída
    if (numero1 > numero2){
        console.log('maior: ',numero1)
        console.log('menor: ',numero2)
    }else if (numero1 < numero2){
        console.log('maior: ',numero2)
        console.log('menor: ',numero1)
    }else{
        console.log('Os números são iguais.')
    }
}
main()