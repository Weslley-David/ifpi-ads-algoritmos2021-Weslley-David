/*16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const nota_1 = Number(input('Nota 1: '))
    const nota_2 = Number(input('Nota 2: '))
    let media = 0
    
    media = (nota_1 + nota_2)/2
    if (media >= 7){
        console.log('Aprovado')
    }else if(media <= 7){
        const nota_final = Number(input('Nota da prova final: '))
        media = (nota_1 + nota_2 +nota_final)/3
        if(media >= 5){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
        }
    }
}
main()