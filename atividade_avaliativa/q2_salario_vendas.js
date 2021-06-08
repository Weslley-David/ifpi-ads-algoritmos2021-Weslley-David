const input = require('prompt-sync')()

function main(){
// Entrada
const nome = input('Nome do vendedor: ')
const valor_vendas = Number(input('Valor de contribuição: '))
let comissao = 0
// Processamento
if (valor_vendas > 5000 && valor_vendas <= 10000) {
    comissao = (valor_vendas - 5000) * 5/100
}else if (valor_vendas > 10000 && valor_vendas <= 30000) {
    comissao = (valor_vendas - 5000) * 5/100 + (valor_vendas - 10000) * 10/100
}else if (valor_vendas > 30000){
    comissao = valor_vendas *20/100
}

salario = comissao + 1100
// Saída
console.log('O salário de ', nome, 'é ', salario)
}
main()