const prompt = require('prompt-sync')()

/*5. (q5_criptoger.js) Criptografia de Roger: Receba uma frase(letra números e
espaços apenas) e criptografia-a usando o algoritmo de roger:*/
function main(){
    const palavra = 'teste'
    
    let frase_invertida = '' //invertendo as partes da frase

        for (let i = Math.floor((palavra.length - 1)/2); i >= 0; i--) {
            frase_invertida = frase_invertida + palavra[i]
        }
        console.log(frase_invertida)
        
        for (let i = Math.floor((palavra.length - 1)/2) + 1; i >= palavra.length; i++) {
            frase_invertida = frase_invertida + palavra[i]
            
        }
        console.log(frase_invertida)
}
main()