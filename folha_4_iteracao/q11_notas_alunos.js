/*11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)
10
Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.*/
const input = require('prompt-sync')()
function main(){
let quant_alunos = Number(input('Quantos alunos deseja conferir a nota? '))
let matricula = new Array(quant_alunos)
let media_aluno = new Array(quant_alunos)
let nota1 = 0, nota2 = 0, nota3 = 0
let conferir =  quant_alunos
let passou = 0, reprovou = 0
    
while(quant_alunos > 0){
    matricula[quant_alunos] = Number(input(`Matrícula ${quant_alunos}: `))

     nota1 = Number(input('Nota 1: '))
     nota2 = Number(input('Nota 2: '))
     nota3 = Number(input('Nota 3: '))

     media_aluno[quant_alunos] = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10
     
     quant_alunos--
    }
while(conferir > 0){
    if(media_aluno[conferir] >= 7){
        console.log(`${matricula[conferir]} passou com media ${media_aluno[conferir]}`)
        passou++
    }
    else{
        console.log(`${matricula[conferir]} reprovou com media ${media_aluno[conferir]}`)
        reprovou++
    }
    conferir--
}
console.log(`Aprovados: ${passou}`)
console.log(`Reprovados: ${reprovou}`)
console.log(`total de alunos ${passou + reprovou}`)
}
main()