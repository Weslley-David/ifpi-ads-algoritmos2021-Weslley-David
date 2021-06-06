/*10. Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const nota_1 = Number(input('Nota 1: '))
    const nota_2 = Number(input('Nota 2: '))
    const media = (nota_2 + nota_1)/2

    // Processamento
    if (media >= 9){
        console.log('A')
    }else if (media < 9 && media >= 7.5){
        console.log('B')
    }else if (media < 7.5 && media >= 6){
        console.log('C')
    }else if (media < 6 && media >= 4){
        console.log('D')
    }else{
        console.log('E')
    }
}
main()