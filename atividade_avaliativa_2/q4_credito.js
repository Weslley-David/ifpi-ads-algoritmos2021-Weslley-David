/*A Blue Tech Bank disponibilizou opções de crédito de R$ 40 mil,
60 mil, e 81 mil reais para empreendedores locais. Mensalmente adiciona juros
de 1% sobre o saldo devedor de um empréstimo. As opções de parcelas mensais
são fixas no valor de R$ 1.000, R$ 1.200 ou R$ 1.500. Escreva um algoritmo que
calcule quantos meses são necessários para se concluir o pagamento do
empréstimo e qual o valor da parcela final. A Cada mês no saldo devedor entram
os Juros sobre o saldo atual e Sai a Parcela fixa.*/
const input = require('prompt-sync')()
function main(){
    let emprestimo = Number(input('Digite o valor do empréstimo: '))
    const parcela = Number(input('Digite o valor da parcela: '))
    juros = 1
    mes = 1
    stop = false
    while(emprestimo > 0){
        console.log(`Saldo anterior: ${emprestimo.toFixed(2)}`)
        
        emprestimo = (emprestimo - parcela) //paga parcela
        if(emprestimo - parcela < 0){
            emprestimo = parcela - emprestimo
            stop = true
        }
        juros = (emprestimo/100)//calcula os juros
        emprestimo = emprestimo + juros//adiciona juros
        
        console.log(`Novo Saldo: R$${emprestimo.toFixed(2)}`)
        console.log(`Juros do Mês: R$ ${juros.toFixed(2)}`)
        console.log(`Parcela fixa: R$${parcela.toFixed(2)}`)
        console.log('============================')
        mes++
        if(stop == true){
            break
        }
    }
    console.log(`Quantidade de meses para quitação: ${mes} `)
    console.log(`Ultima parcela: ${emprestimo.toFixed(2)}`)
    }    

    main()