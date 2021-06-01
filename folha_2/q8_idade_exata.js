/*8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).*/
const input = require('prompt-sync')()
function main(){
    let ano_result = 0, mes_result = 0, dia_result = 0;
    // Entrada
    console.log("entre com sua data de nascimento")
    const nasc_ano = Number(input('ano: '))
    const nasc_mes = Number(input('mês: '))
    const nasc_dia = Number(input('dia: '))

    console.log("entre com a data atual")
    const atual_ano = Number(input('ano: '))
    const atual_mes = Number(input('mês: '))
    const atual_dia = Number(input('dia: '))
    
    // Processamento
    ano_result = atual_ano - nasc_ano 

    if (nasc_mes > atual_mes){
        mes_result = nasc_mes - atual_mes
    }else{
        mes_result = atual_mes - nasc_mes
    }

    if(nasc_dia > atual_dia){
        dia_result = nasc_dia - atual_dia
    }else{
        dia_result = atual_dia - nasc_dia
    }

    //Saída
    console.log('você tem', ano_result, 'anos', mes_result, 'meses e', dia_result, 'dias.')
}
main()