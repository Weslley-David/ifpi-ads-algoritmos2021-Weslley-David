/*23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log('Data 1>>> ')
    const ano = Number(input('Ano: '))
    const mes = Number(input('Mês: '))
    const dia = Number(input('Dia: '))
    console.log('Data 2>>> ')
    const ano_2 = Number(input('Ano: '))
    const mes_2 = Number(input('Mês: '))
    const dia_2 = Number(input('Dia: '))
    
    //Processamento
    if ( ano > ano_2 ){
        console.log('Data 1 mais recente')
    }else if(ano_2 > ano){
        console.log('Data 2 mais recente')
    }else{
        if(mes > mes_2){
            console.log('Data 1 mais recente')
        }else if(mes_2 > mes){
            console.log('Data 2 mais recente')
        }else{
            if(dia > dia_2){
                console.log('Data 1 mais recente')
            }
            else if(dia_2 > dia){
                console.log('Data 2 mais recente')
            }else{
                console.log('As datas são iguais')
            }
        }
    }
}
main()