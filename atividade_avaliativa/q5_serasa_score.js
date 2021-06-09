const input = require('prompt-sync')()
function main(){
// Entrada
console.log('Atribua valores de 0 a 100: ')
const dados_positivos = Number(input('Dados Positivos : '))
const dados_de_divida = Number(input('Dados de dívida : '))
const consultas_novas = Number(input('leitura anterior: '))
let status_1
let status_2
//Processamento
const serasa_1 = (dados_positivos * 2.6) + (dados_de_divida * 5.7) + (consultas_novas * 1.7)
const serasa_2 = (dados_positivos * 6.2) + (dados_de_divida * 1.9) + (consultas_novas * 1.9)

if (serasa_1 > 800 && serasa_1 <= 1000) {
    status_1 = 'Muito bom. '
}else if (serasa_1 >= 600 && serasa_1 <= 800) {
    status_1 = 'Bom. '
}else if (serasa_1 >= 600 && serasa_1 <= 800) {
    status_1 = 'Regular. '
}else{
    status_1 = 'Baixo. '
}

if (serasa_2 > 700 && serasa_2 <= 1000) {
    status_2 = 'Muito bom. '
}else if (serasa_2 >= 500 && serasa_2 <= 700) {
    status_2 = 'Bom. '
}else if (serasa_2 >= 300 && serasa_2 <= 500) {
    status_2 = 'Regular. '
}else{
    status_2 = 'Baixo. '
}
//Saída
console.log('serasa 0.1: ', serasa_1, 'status:',status_2)
console.log('serasa 0.2: ', serasa_2, 'status: ',status_1)
}
main()