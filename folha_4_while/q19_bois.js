/*19. Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.º de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.º de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.º identificação=0)*/
const input = require('prompt-sync')()
function main(){
loop = true
let menor_id = Number(input('código: '))
let menor_peso = Number(input('peso: '))
    while(loop){
        id = Number(input('código: '))
        peso = Number(input('peso: '))

        if(menor_peso > peso){
            menor_peso = peso
            menor_id = id
        }
        console.log(menor_id,menor_peso)

        console.log('continue? (s/n) ')
        status_loop = input()

        if(status_loop != 's'){
            loop = false
        }
    }
    console.log(`menor peso: código ${menor_id}, peso ${menor_peso}`)
}
main()