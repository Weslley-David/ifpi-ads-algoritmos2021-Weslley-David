//3. Leia uma letra e verifique se a letra digitada é vogal ou consoante.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const letra = input('Digite uma letra (consoante ou vogal): ')
    // Processamento
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        console.log(letra ,' é uma vogal.')
    }else{
        console.log(letra,' é uma consoante.')
    }
}
main()