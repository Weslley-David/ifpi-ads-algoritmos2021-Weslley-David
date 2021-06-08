const input = require('prompt-sync')()

function main(){
// Entrada
const media_14 = Number(input('Entre com a média dos últimos 14 dias: '))
const media_hoje = Number(input('Entre a média de casos hoje: '))
let status

// Processamento
let percentual = (100 * media_hoje)/media_14 //regra de 3
percentual = percentual - 100

if (percentual > -15 && percentual < 15) {
    status = 'Em estabilidade com '
} else if(percentual < -15){
    status = 'Em queda com '
}else{
    status = 'Em alta com '
}

// Saída
console.log(status, 'percentual: ', percentual.toFixed(2), '%')
}
main()