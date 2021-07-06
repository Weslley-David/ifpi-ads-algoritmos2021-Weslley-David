/*3. Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção dos vetores A e B.
Desta forma, o vetor C deverá ter 2*N elementos.*/
const input = require('prompt-sync')()
function main(){
    let elemento_total = '', elemento, i = 0;
    console.log('-- Escreva -> end <- para terminar a coleta -- ')//VETOR A
    while(true){
        elemento = input('escreva algo: ')
        if(elemento == 'end'){
            break
        }
            elemento_total = elemento_total + elemento + ' '
    }
    a = elemento_total.split(' ')

    elemento_total = ''

    console.log('-- Escreva -> end <- para terminar a coleta -- ')//VETOR B
    while(true){
        elemento = input('escreva algo: ')
        if(elemento == 'end'){
            break
        }
            elemento_total = elemento_total + elemento + ' '
    }

    b = elemento_total.split(' ')
    
    //Vetor C
    c = new Array(a.length + b.length)
    while(i < a.length){
        c[i] = a[i]
        i++
    }
    i = a.length
    i2 = 0
    while(i < a.length + b.length){
        c[i] = b[i2]
        i++
        i2++
    }

    
    console.log(a)
    console.log(b)
    console.log(c)

}
main()