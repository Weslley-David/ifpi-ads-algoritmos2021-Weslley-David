const input = require('prompt-sync')()
function main(){
const n = Number(input('Digite o número de testes: '))
let n_coelhos = 0, n_ratos = 0, n_sapos = 0
    for (let i = 0; i < n; i++){
        cobaia = input('cobaia: ')
        parametros = cobaia.split(' ')
        if(parametros[1] == 'c' || parametros[1] == 'C'){
            n_coelhos = n_coelhos + parseInt(parametros[0])

        }else if(parametros[1] == 'r' || parametros[1] == 'R'){
            n_ratos = n_ratos + parseInt(parametros[0])

        }else if(parametros[1] == 's' || parametros[1] == 'S'){
            n_sapos = n_sapos + parseInt(parametros[0])
        }
    }
    total = n_coelhos + n_ratos + n_sapos
    perc_coelhos = (n_coelhos * 100)/ total
    perc_ratos = (n_ratos * 100)/ total
    perc_sapos = (n_sapos * 100)/ total
    console.log('total de cobaias: ', total)
    console.log('coelhos: ',n_coelhos)
    console.log('ratos  : ',n_ratos)
    console.log('sapos  : ', n_sapos)
    console.log('percentual de coelhos: ', perc_coelhos.toFixed(2))
    console.log('percentual de ratos  : ', perc_ratos.toFixed(2))
    console.log('percentual de sapos  : ', perc_sapos.toFixed(2))
}
main()