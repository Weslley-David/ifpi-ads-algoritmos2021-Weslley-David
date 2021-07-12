//possíveis erros
const input = require('prompt-sync')()
function main(){
let maior_altura = 0, menor_altura = 0, maior_peso = 0, menor_peso = 0;
let peso, altura;
let nome_alta, nome_baixa, nome_leve, nome_pesada;
    while(true){
    nome = input('Nome: ')
    if(nome == 'fim'){
        break
    }
    peso = Number(input('Peso: '))
    altura = Number(input('Altura: '))
    
    if(altura > maior_altura){
        nome_alta = nome
        maior_altura = altura
    }
    if(altura < menor_altura){
        nome_baixa = nome
        menor_altura = altura
    }
    if(peso > maior_peso){
        nome_pesada = nome
        maior_peso = peso
    }
    if(peso < menor_peso){
        nome_leve = nome
        menor_peso = peso
    }
    }
    console.log(`Mais alta: ${nome_alta} com ${maior_altura}`)
    console.log(`Mais baixa: ${nome_baixa} com ${menor_altura}`)
    console.log(`Mais pesada: ${nome_pesada} com ${maior_peso}`)
    console.log(`Mais alta: ${nome_leve} com ${menor_peso}`)
    
}
main()