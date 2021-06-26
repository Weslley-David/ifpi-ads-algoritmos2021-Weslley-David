/*13. Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)*/
const input = require('prompt-sync')()
function main(){
let salario = 0, reajuste = 0, loop = true , status_loop = 's'
let soma_salario_anterior = 0
let soma_salario_reajuste = 0
    while(loop){
        let salario = Number(input('Digite seu salário: '))
        if(salario <= 2999.99){
            reajuste = salario * 25/100
        }else if(salario <= 5999.99){
            reajuste = salario * 20/100
        }else if(salario <= 9999.99){
            reajuste = salario * 15/100
        }else{
            reajuste = salario * 10/100
        }
        soma_salario_anterior = soma_salario_anterior + salario
        soma_salario_reajuste = soma_salario_reajuste + (reajuste + salario)
        
        console.log('continue? (s/n) ')
        status_loop = input()

        if(status_loop != 's'){
            loop = false
        }
    }
    console.log(`Soma dos salários antes do reajuste : ${soma_salario_anterior}`)
    console.log(`Soma dos salários depois do reajuste: ${soma_salario_anterior}`)
    console.log(`Custo adicional pós-reajuste        : ${soma_salario_reajuste - soma_salario_anterior}`)
}
main()