/*11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.*/
const input = require('prompt-sync')()
function main(){
    let resultado = 0
    let limite_superior = Number(input('Limite superior: '))
    let limite_inferior = Number(input('Limite inferior: '))

    for(i = limite_inferior; i < limite_superior; i= i + 2){
        for (let i2 = 2; i2 < i; i2++) {
            if (i%i2 != 0) {
                resultado = i + ' é primo.'
            }else{
                resultado = i + ' é primo.'
            }
            
        }
    }
}

main()