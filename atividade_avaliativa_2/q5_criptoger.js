/*5. (q5_criptoger.js) Criptografia de Roger: Receba uma frase(letra números e
espaços apenas) e criptografia-a usando o algoritmo de roger:*/
//apenas a primeira parte completa com alguns bug ;-;
const input = require('prompt-sync')()
function main(){
    frase_final = ''
    const frase = input('digite uma frase: ')
    frase_split = frase.split(' ')
    for (let i = 0; i < frase_split.length; i++) {
        frase_invertida = inverter_partes(frase_split[i])
        frase_final = frase_final + ' ' + frase_invertida
    }
    console.log(frase_final)
}
function inverter_partes(frase){
    const palavra = frase
    
    let frase_invertida = '' //invertendo as partes da frase

        for (let i = (Math.floor(palavra.length/2)) - 1; i >= 0; i--) {
            frase_invertida = frase_invertida + palavra[i]
        }
        for (let i = (Math.floor(palavra.length/2)); i < palavra.length; i++) {
            frase_invertida = frase_invertida + palavra[i]
        }

        return frase_invertida
}
main()