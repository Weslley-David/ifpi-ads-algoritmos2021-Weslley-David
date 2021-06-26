/*14. Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2º turno.*/
const input = require('prompt-sync')()
function main(){
let opiniao = true;
let serra = 0, dilma = 0, ciro = 0, indeciso = 0, outro = 0, nulo_ou_branco = 0
let serra_porcent = 0, dilma_porcent = 0, ciro_porcent = 0, indeciso_porcent = 0, outro_porcent = 0, nulo_porcent = 0

    while(opiniao){
        console.log('Serra = 45 | Dilma = 13 | Ciro Gomes = 23')
        console.log('Indeciso = 99 | Outros = 98 | nulo/branco = 0')
        escolha = Number(input('escolha um candidato: '))
        if(escolha == 45){
            serra = serra + 1
        }else if(escolha == 13){
            dilma = dilma + 1
        }else  if(escolha == 23){
            ciro = ciro + 1
        }else if(escolha == 99){
            indeciso = indeciso + 1
        }else if(escolha == 98){
            outro = outro + 1
        }else if(escolha == 0){
            nulo_ou_branco = nulo_ou_branco + 1
        }
        
        console.log('continue? (s/n) ')
        status_loop = input()

        if(status_loop != 's'){
            opiniao = false
        }
    }
    
    total_entrevistados = nulo_ou_branco + outro + indeciso + ciro + dilma + serra  
    
    serra_porcent = (serra * 100)/total_entrevistados //Obtendo porcentagem
    dilma_porcent = (dilma * 100)/total_entrevistados
    ciro_porcent = (ciro * 100)/total_entrevistados
    indeciso_porcent = (indeciso * 100)/total_entrevistados
    outro_porcent = (outro * 100)/total_entrevistados
    nulo_porcent = (nulo_ou_branco * 100)/total_entrevistados

    console.log(`Serra: ${serra_porcent} `)
    console.log(`Dilma: ${dilma_porcent} `)
    console.log(`Ciro : ${ciro_porcent} `)
    console.log(`Indecisos: ${indeciso_porcent} `)
    console.log(`Outros: ${outro_porcent} `)
    console.log(`Nulo: ${nulo_porcent} `)
}
main()