/*25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const senha = input('Senha: ')
    
    //Processamento
    if (senha == '1234'){
        console.log('Acesso Permitido')
    }else{
        console.log('Acesso Negado')
    }
}
main()