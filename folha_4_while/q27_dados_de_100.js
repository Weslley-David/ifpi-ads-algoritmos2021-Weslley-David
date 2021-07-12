/*Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.*/
const input = require('prompt-sync')()
function main(){
let pessoas = 0, soma_idade_mulher = 0, soma_idade_homem = 0, idade, sexo, estado_civil, solteiros_homens = 0, solteiros_mulheres = 0, mulheres_solteiras30 = 0;
while(pessoas < 4){
    sexo = Number(input('(1=Masculino 2=Feminino) Qual seu sexo? '))
    idade = Number(input('Idade: '))
    estado_civil = Number(input('(1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) Estado Civil: '))

    if(sexo == 1){
        soma_idade_homem = soma_idade_homem + idade
    }else if(sexo = 2){
        soma_idade_mulher = soma_idade_mulher + idade
    }

    if(estado_civil == 2 && sexo == 1){
        solteiros_homens = solteiros_homens + 1
    }else if(estado_civil == 2 && sexo == 2){
        solteiras_mulheres = solteiros_mulheres + 1
    }

    if(idade > 30 && sexo == 2){
        mulheres_solteiras30 = mulheres_solteiras30 + 1
    }


    pessoas++
}
//Processamento
const media_idade_homem = soma_idade_homem/100
const media_idade_mulher = soma_idade_mulher/100

console.log(`Média de idade das mulheres: ${media_idade_homem}`)
console.log(`Média de idade das homens  : ${media_idade_mulher}`)
console.log(`Percentual de homens solteiros: ${solteiros_homens} %`)
console.log(`Percentual de mulheres solteiras: ${solteiros_mulheres} %`)
console.log(`A quantidade de mulheres divorciadas acima de 30 anos: ${mulheres_solteiras30}`)
}
main()
