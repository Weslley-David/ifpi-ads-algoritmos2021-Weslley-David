const input = require('prompt-sync')()
function main(){
// Entrada
const leitura_atual = Number(input('leitura atual: '))
const leitura_anterior = Number(input('leitura anterior: '))

//processamento
let leitura_resultante = leitura_atual - leitura_anterior//consumo bruto

if (leitura_resultante <= 30) {//cálculo bruto
    valor_total = 0
} else if (leitura_resultante > 30 && leitura_resultante <= 100 ) {
    valor_total = leitura_resultante * 0.59
}else{
    valor_total = leitura_resultante * 0.75
}

vezes_bandeira = Math.trunc(leitura_resultante/100)// Bandeira
valor_total = vezes_bandeira * 8

if (leitura_resultante > 80) {//iluminação pública
    ilumin_public = valor_total * 6/100
    valor_total = valor_total +(valor_total * 6/100)
}

icms = valor_total * 25/100//impostos
pis = valor_total * 15/100

// Saída
console.log('Consumo           : ', leitura_resultante,'KWh')
console.log('Valor Faturado    : ', valor_total.toFixed(2))
console.log('Bandeira          : ', vezes_bandeira,'x bandeiras')
console.log('ICMS              : ', icms.toFixed(2))
console.log('PIS/CONFIS        : ', pis.toFixed(2))
console.log('Taxa de iluminação: ',ilumin_public.toFixed(2))

}
main()