/*1. Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que
estes deverão estar invertidos, ou seja, o 1º elemento de A deve ser o último elemento de B; o 2º
elemento de A deve ser o penúltimo elemento de B e assim por diante.*/
const input = require('prompt-sync')()
function main(){
    let elemento_total = '', elemento, i;
    console.log('-- Escreva -> end <- para terminar a coleta -- ')
    while(true){
        elemento = input('escreva algo: ')
        if(elemento == 'end'){
            break
        }
            elemento_total = elemento_total + elemento + ' '
    }
    a = elemento_total.split(' ')
    i = a.length - 1
    i2 = 0
    b = new Array (a.length)
    while(i >= 0){
        b[i2] = a[i]
        i --
        i2 ++
    }
    console.log(a)
    console.log(b)

}
main()