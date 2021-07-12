/*8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.*/
const input = require('prompt-sync')()
function main(){
    let resultado = 0
    let n = Number(input('Múltiplo: '))
    let limite_superior = Number(input('Limite superior: '))
    let limite_inferior = Number(input('Limite inferior: '))
    for(i = 0; i < limite_superior; i++){
        resultado = i * n
        if (resultado >= limite_inferior && resultado <= limite_superior) {
            console.log(i)
        }
    }
}

main()