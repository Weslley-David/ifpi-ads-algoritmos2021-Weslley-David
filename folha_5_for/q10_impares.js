/*10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.*/
const input = require('prompt-sync')()
function main(){
    let limite_superior = Number(input('Limite superior: '))
    let limite_inferior = Number(input('Limite inferior: '))
    if(limite_inferior%2 != 1){
        limite_inferior = limite_inferior + 1
    }
    for(i = limite_inferior; i < limite_superior; i= i + 2){
        console.log(i)
    }
}

main()