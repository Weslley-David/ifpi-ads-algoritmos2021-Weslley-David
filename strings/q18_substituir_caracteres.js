/*18. Os editores de texto possuem um recurso que permite que o usuário substitua uma sub-cadeia de um
texto por outra cadeia de caracteres. Escreva um programa que realize esta ação numa frase dada.*/
const input = require('prompt-sync')()
function substr(frase){
    inicio = inicio - 1
    console.log(nome.substr(inicio,final))
    
}
function main(){
    const frase = input('Escreva algo: ')
    const termo_anterior = input('Termo a ser substituído: ')
    const termo_posterior = input('Termo a ser alocado: ')
    let frase_separada = frase.split(' ')
    let nova_frase = ''
    let i = 0
    while(i < frase_separada.length){
        if(frase_separada[i] == termo_anterior){
            nova_frase = nova_frase + ' ' + termo_posterior
        }else{
            nova_frase = nova_frase + ' ' + frase_separada[i]
        }
        i++
    }
    console.log(nova_frase)

}
main()