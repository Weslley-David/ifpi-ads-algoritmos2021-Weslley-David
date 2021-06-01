/*15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    console.log('Professor 1 >>>')
    const horas = input('Insira a quantidade de horas: ')
    const custo_hora = input('Insira o valor por hora: ')
    console.log('Professor 2 >>>')
    const horas_2 = input('Insira a quantidade de horas: ')
    const custo_hora_2 = input('Insira o valor por hora: ')
    
    // Processamento e saída
    if ((horas*custo_hora) > (horas_2*custo_hora_2)){
        console.log('Professor 1 tem o maior salário')
    }else if((horas*custo_hora) < (horas_2*custo_hora_2)){
        console.log('Professor 2 tem o maior salário')
    }else{
        console.log('Os salários são iguais.')
    }
}
main()