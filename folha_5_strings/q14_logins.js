/*14. Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte
regra: o login é composto pelas letras iniciais do nome do usuário.*/
const input = require('prompt-sync')()
function gerar_login(nome){
    nome_separado = nome.split(' ')
    let i = 0, login = ''
    while(i < nome_separado.length - 1){
        login = login + (nome_separado[i][0])
        i++
    }
    console.log('login: ', login)
}
function main(){
    const nome = input('Escreva seu nome: ')
    gerar_login(nome)
}
main()