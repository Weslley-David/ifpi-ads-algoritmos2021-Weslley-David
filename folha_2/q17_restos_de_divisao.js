/*17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1 escreva a soma dessas variáveis mais o resto da divisão; 
se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; 
se for igual a 4 divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação escreva o quadrado dos números lidos.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const numero1 = Number(input('Diga um número: '))
    const numero2 = Number(input('Diga outro número: '))
    console.log(numero1%numero2)
    
    // Processamento e saída
    if (numero1 % numero2 == 1){
        console.log(numero1 % numero2)
        console.log(numero1 + numero2)
    }else if (numero1 % numero2 == 2){
        if (numero1 % 2 == 0){
            console.log(numero1,' é par.')
        }else{
            console.log(numero1,' é impar.')
        }
        if (numero2 % 2 == 0){
            console.log(numero1,' é par.')
        }else{
            console.log(numero1,' é impar.')
        }
        console.log('menor: ',numero1)
    }else if(numero1 % numero2 == 3){
        console.log((numero1 + numero2) * numero1)
    }else if(numero1 % numero2 == 4){
        if(numero2 != 0){}
        console.log((numero1 + numero2)/numero2)
    }else{
        console.log(Math.pow(numero1,2))
        console.log(Math.pow(numero2,2))
    }
}
main()