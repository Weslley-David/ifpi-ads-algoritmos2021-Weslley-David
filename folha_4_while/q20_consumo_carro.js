/*20. Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
<600 km>. No início da viagem, o carro está com o tanque cheio (<50 litros>). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro*/
const input = require('prompt-sync')()
function main(){
let reabastecer = 0, distancia_total = 0, litros_total = 0
    while(distancia_total < 600){
        distancia = Number(input('Distância percorrida desde a última medição: '))
        litros = Number(input('Quantidade de litros consumidos para percorrer a distância indicada: '))

        distancia_total = distancia_total + distancia
        litros_total = litros_total + litros

        if(litros_total >= 50){
            reabastecer = reabastecer + 1
            litros = 0
            litros_total = 0

        }

    }
    let consumo_medio = distancia_total / ((reabastecer * 50)+50)
    console.log('Você chegou ao seu destino.')
    console.log(`O carro parou ${reabastecer} por falta de combustível antes de chegar ao destino.`)
    console.log(`consumo médio: ${consumo_medio}`)
    

}
main()