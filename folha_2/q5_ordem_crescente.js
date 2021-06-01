//AINDA NÃO TERMINEI
//5. Leia 3 (três) números e escreva-os em ordem crescente.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Diga um número: '))
    const numero2 = Number(input('Diga outro número: '))
    const numero3 = Number(input('Diga mais um número: '))
    
    // Processamento e saída
    if (numero1 > numero2 && numero2 > numero3){
        console.log(numero1, numero2, numero3)
    }else if (numero2 > numero1 && numero2 > numero3){
        console.log('maior número: ',numero2)
    }else if (numero3 > numero1 && numero3 > numero2){
        console.log('maior número: ',numero3)
    }else{
        console.log('Há pelo menos 2 números iguais que ocupam a maior posição.')
    }
}
main()