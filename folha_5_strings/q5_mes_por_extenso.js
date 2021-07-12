/*5. Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA)*/
const input = require('prompt-sync')()
function main(){
const data = input('Digite uma data (DDMMAAAA): ')
mes_numero = Number(data[2] + data[3])
switch(mes_numero){
    case 01:
        mes_extenso = 'Janeiro'
    break
    case 02:
        mes_extenso = 'Fevereiro'
    break
    case 03:
        mes_extenso = 'Março'
    break
    case 04:
        mes_extenso = 'Abril'
    break
    case 05:
        mes_extenso = 'Maio'
    break
    case 06:
        mes_extenso = 'Junho'
    break
    case 07:
        mes_extenso = 'Julho'
    break
    case 08:
        mes_extenso = 'Agosto'
    break
    case 09:
        mes_extenso = 'Setembro'
    break
    case 10:
        mes_extenso = 'Outubro'
    break
    case 11:
        mes_extenso = 'novembro'
    break
    case 12:
        mes_extenso = 'dezembro'
    break
}
console.log(`${data.substr(0,2)} de ${mes_extenso} de ${data.substr(4, 5, 6, 7)}`)
}
main()