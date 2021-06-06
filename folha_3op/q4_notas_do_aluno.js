/*4. Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const nota_1 = Number(input('Digite a primeira nota: '))
    const nota_2 = Number(input('Digite a segunda nota : '))
    media = (nota_1 + nota_2)/2
    // Processamento
    if (media >= 10) {
        console.log('Aprovado com distinção.')
    }
    else if(media >= 7 && media <= 9){
        console.log('Aprovado.')
    }
    else{
        console.log('Reprovado.')
    }
}
main()