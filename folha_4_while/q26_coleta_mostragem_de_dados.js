/*26. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.*/
const input = require('prompt-sync')()
function main(){
let idade = 0, opiniao = 0, soma_idade = 0, quantidade_bom = 0, regular_num = 0, quantidade_pessoas = 0;
while(true){
    idade = Number(input('qual sua idade? '))
    if(idade == -1){
        break
    }
    opiniao = Number(input('qual sua opinião quanto ao filme?(1 a 5) '))

    if(opiniao == 1){
        soma_idade = soma_idade + idade
    }else if(opiniao == 2){
        quantidade_bom = quantidade_bom + 1
    }else if(opiniao == 3){
        regular_num = regular_num + 1
    }
    quantidade_pessoas = quantidade_pessoas + 1

}
//Processamento
const media_idade = soma_idade/quantidade_pessoas
const quantidade_bom_percentual = (quantidade_bom * 100)/quantidade_pessoas

console.log(`média das idades das pessoas que responderam ótimo: ${media_idade}`)
console.log(`quantidade de pessoas que respondeu regular: ${regular_num}`)
console.log(`percentual de pessoas que respondeu bom entre os entrevistados: ${quantidade_bom_percentual} %`)
}
main()
