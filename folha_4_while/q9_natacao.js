//Ainda não fiz
/*9. Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:*/
const input = require('prompt-sync')()
function main(){
const numero_prova = Number(input('Digite o número da prova        : '))
let nadadores_quant = Number(input('Digite a quantidade de nadadores: '))
    while(nadadores_quant > 0){
        let nome = Number(input('nome: '))
        let classfic = Number(input('classificação: '))
        let tempo = Number(input('tempo: '))
        let time = input('time: ')
        if(time == 'a' || time == 'A'){
            pontos_a = pontos_a + classfic
        }else{

        }
        nadadores_quant--
    }
}
main()