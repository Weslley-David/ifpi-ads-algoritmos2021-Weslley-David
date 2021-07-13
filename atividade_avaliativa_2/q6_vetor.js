const input = require('prompt-sync')()
function main(){
const n = Number(input('Quantidade de elementos: '))
const vetor = new Array(n)//criando vetor

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Number(input('insira um valor: '))
    
}
let media = media_valores(vetor)
let menor = menor_valor(vetor)
let maior = maior_valor(vetor)
let positivos = quant_positivos(vetor)
let negativo = quant_negativos(vetor)
let repetidos = tem_repetido(vetor)

console.log(`Média dos Valores: ${media}`)
console.log(`Maior Valor: ${maior}`)
console.log(`Menor Valor: ${menor}`)
console.log(`Quantidade Positivos: ${positivos}`)
console.log(`Quantidade Negativos: ${negativo}`)
console.log(`Se há valores repetidos: ${repetidos}`)

}
function media_valores(vetor){//realiza a média do valores
    soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i]
    }
    media = soma/vetor.length
    return media.toFixed(2)
    
}

function menor_valor(vetor){
    var menor = vetor[0]
    for(i = 0; i < vetor.length; i++){//menor valor
       menor = Math.min(menor, vetor[i]);
    }
    return menor
    
}

function maior_valor(vetor){
    var max = vetor[0]
    for(i = 0; i < vetor.length; i++){//maior valor
       max = Math.max(max, vetor[i]);
    }
    return max
    
}

function quant_positivos(vetor){
    let positivo = 0
    for(i = 0; i < vetor.length; i++){//confere quantidade de positivos
       if (vetor[i] > 0) {
           positivo = positivo + 1
       }
    }
    return positivo
}

function quant_negativos(vetor){
    let negativo = 0
    for(i = 0; i < vetor.length; i++){//confere quantidade de negativos
       if (vetor[i] < 0) {
           negativo = negativo + 1
       }
    }
    return negativo
    
}

function tem_repetido(vetor){
    status = 'não'
    for(i = 0; i < vetor.length; i++){//confere repetição
       for (let i2 = 0; i2 < vetor.length; i2++) {
           if((i != i2) && (vetor[i] == vetor[i2])){
               status = 'sim'
           }
           
       }
    }
    return status
}
main()