/*5. Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const produto_1 = Number(input('Digite o preço do primeiro produto : '))
    const produto_2 = Number(input('Digite o preço do segundo produto  : '))
    const produto_3 = Number(input('Digite o preço do terceiro produto : '))
    // Processamento
    if (produto_1 < produto_2 && produto_1 < produto_3) {
        console.log(produto_1,' é o menor preço.')
    }
    else if (produto_2 < produto_1 && produto_2 < produto_3) {
        console.log(produto_2,' é o menor preço.')
    }
    else{
        console.log(produto_3,' é o menor preço.')
    }
}
main()