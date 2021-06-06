//2. Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.
const input = require('prompt-sync')()
function main(){
    // Entrada
    const sexo = input('Indique seu sexo (f/m): ')
    // Processamento
    if (sexo == 'f'){
        console.log('F - Feminino')
    }else if(sexo == 'm'){
        console.log('M - Masculino')
    }else{
        console.log('Sexo Inválido')
    }
}
main()