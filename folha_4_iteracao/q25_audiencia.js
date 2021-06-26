/*25. Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.*/
const input = require('prompt-sync')()
function main(){
let canal = [0,0,0,0,0]
let num_canal = 99, telespectadores = 0, total_pessoas = 0;
//início
while(true){
    num_canal = Number(input('número do canal: '))
    if(num_canal == 0){
        break;
    }
    telespectadores = Number(input('número de pessoas: '))

    if (num_canal == 2){
        canal[0] = canal[0] + telespectadores
    }else if (num_canal == 4){
        canal[1] = canal[1] + telespectadores
    }else if (num_canal == 5){
        canal[2] = canal[2] + telespectadores
    }else if (num_canal == 7){
        canal[3] = canal[3] + telespectadores
    }else if (num_canal == 10){
        canal[4] = canal[4] + telespectadores
    }
    total_pessoas = total_pessoas + telespectadores
}

//processamento
    for (let index = 0; index < 5; index++) {
        canal[index] = (canal[index] * 100)/total_pessoas
        console.log(index)
        
    }

//saída
console.log(`canal 2: ${canal[0]}%`)
console.log(`canal 4: ${canal[1]}%`)
console.log(`canal 5: ${canal[2]}%`)
console.log(`canal 7: ${canal[3]}%`)
console.log(`canal 10: ${canal[4]}%`)
}
main()