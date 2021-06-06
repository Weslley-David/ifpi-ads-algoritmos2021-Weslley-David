/*7. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.*/
const input = require('prompt-sync')()
let reajuste, percentual;
function main(){
    // Entrada
    const salario = Number(input('Indique o valor de seu salário: '))
    // Processamento
    if (salario <= 280){
        reajuste = (salario*20/100)
        percentual  = '20%'
    }
    else if (salario > 280 && salario <= 700){
        reajuste = (salario*15/100)
        percentual  = '15%'
    }
    else if (salario > 700 && salario <= 1500){
        reajuste = (salario*10/100)
        percentual  = '10%'
    }
    else{
        reajuste = (salario*5/100)
        percentual  = '5%'
    }
    console.log('======================================')
    console.log('Salário antes do reajuste     : ', salario)
    console.log('Percentual do aumento aplicado: ', percentual)
    console.log('Valor do aumento              : ', reajuste)
    console.log('Novo salário                  : ', salario + reajuste)

}
main()