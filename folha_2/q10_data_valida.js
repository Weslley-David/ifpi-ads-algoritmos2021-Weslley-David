//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log("Insira uma data")
    const ano = Number(input('ano: '))
    const mes = Number(input('mês: '))
    const dia = Number(input('dia: '))
    console.log('Ano válido')
    // Processamento e Saída
    if(0 < mes && mes<= 12 ){
        console.log('Mês válido')
    }else{
        console.log('Mes inválido')
    }
    if(0 < dia && dia<= 31){
        console.log('dia válido')
    }else{
        console.log('dia inválido')
    }
}
main()