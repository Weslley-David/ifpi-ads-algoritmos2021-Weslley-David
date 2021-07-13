/*3. (q3_gateway.js) Uma gateway de pagamento (empresa que permite você
processar pagamentos em cartão de crédito) oferece a as seguintes condições:*/
const input = require('prompt-sync')()
function main(){
    let parcelas = 0
    let taxa_total = 0
    //Entrada
    const valor = Number(input('Insira o valor da compra: '))
    const recebimento = Number(input('Em quantos dias deseja receber? '))
    const forma_de_pagamento = input('Forma de pagamento (a vista / prazo): ')
    
    //Processamento
    if(forma_de_pagamento == 'a vista'){//if para conferir o valor da taxa no caso de compra à vista
        if(recebimento > 14){//confere a quantidade de dias para saber o valor da taxa
            taxa = 2.99
            dias = 31
        }else if(recebimento > 2 && recebimento <=14){
            taxa = 3.49
            dias = 14
        }else if(recebimento <= 2){
            taxa = 4.49
            dias = 2
        }
    }else if(forma_de_pagamento == 'prazo'){////if para conferir o valor da taxa no caso de compra parcelada/a prazo
        parcelas = Number(input('Quantas parcelas? '))
        if(recebimento > 14){//confere a quantidade de dias para saber o valor da taxa
            taxa = 3.49
            dias = 31
        }else if(recebimento > 2 && recebimento <=14){
            taxa = 3.99
            dias = 14
        }else if(recebimento <= 2){
            taxa = 4.99
            dias = 2
        }
    }

    taxa_total = valor * taxa/100 + 0.40

        if(parcelas != 0){
            taxa_total = taxa_total + (valor/100) * parcelas
        }

//Saída
    console.log('Valor da compra: ', valor)
    console.log(`forma de pagamento: ${forma_de_pagamento} | Parcelas: (${parcelas} x)`)
    console.log(`taxa: ${taxa_total.toFixed(2)}`)
    console.log(`valor líquido: ${(valor - taxa_total).toFixed(2)} em ${dias} dias.`)



}

main()