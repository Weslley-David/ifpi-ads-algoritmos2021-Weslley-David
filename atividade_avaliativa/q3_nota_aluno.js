const input = require('prompt-sync')()
function main(){
// Entrada
const nome = input('Nome:')
const nota_1 = Number(input('Nota na primeira Avaliação: '))
const nota_2 = Number(input('Nota na segunda Avaliação : '))
const nota_atv = Number(input('Nota em atividades        : '))
let status
let media_final

// Processamento
media_semestre = (nota_1 * 2 + nota_2 * 3 + nota_atv * 1)/6
if (media_semestre >= 7) {
    status = 'Aprovado'
} else if (media_semestre < 4) {
    status = 'Reprovado'
}else{
    const nota_final = Number(input('Nota na Avaliação Final: '))
    media_final = (media_semestre + nota_final)/2
    if (media_final >= 6) {
        status = 'Aprovado pós PF'
    }else{
        status = 'Reprovado pós PF'
    }
}

//saída
console.log('status do aluno: ', status)
console.log('média: ', media_semestre.toFixed(2))
}
main()