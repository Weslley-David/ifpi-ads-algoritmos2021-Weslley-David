//2. Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.
const input = require('prompt-sync')()
function main(){
const numero_1 = Number(input('Digite um número: '))
const numero_2 = Number(input('Digite outro número: '))
let i = 1;
    while(true){
        if(i%numero_1 == 0 && i%numero_2 == 0){
            console.log(`mmc: ${i}`)
            break
        }
        i++
    }
}
main()