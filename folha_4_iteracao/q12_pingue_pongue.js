/*12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.*/
const input = require('prompt-sync')()
function main(){
let ponto = 0, jogador_1 = 0, jogador_2 = 0 
    while(true){
        ponto = Number(input('Quem marcou ponto? '))
        if(ponto == 1){
            jogador_1 = jogador_1 + 1
        }if(ponto == 2){
            jogador_2 = jogador_2 + 1
        }
        if(jogador_1 >= 5){
            if(jogador_1 - jogador_2 >= 2){
                console.log(`jogador 1 ganhou`)
                break
            }
        }
        if(jogador_2 >= 5){
            if(jogador_2 - jogador_1 >= 2){
                console.log(`jogador 2 ganhou`)
                break
            }
        }
    }
}
main()