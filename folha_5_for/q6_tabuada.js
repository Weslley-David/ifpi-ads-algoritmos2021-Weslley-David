/*6. Escreva a tabuada dos números de 1 a 10.*/
const input = require('prompt-sync')()
function main(){
    for(b = 0 ; b <= 10; b++){
        for(i = 0; i <= 10; i++){//adiciona elementos
            console.log(`${b} * ${i} = ${b*i}`)
        }
        console.log('----------------------')
    }
}

main()