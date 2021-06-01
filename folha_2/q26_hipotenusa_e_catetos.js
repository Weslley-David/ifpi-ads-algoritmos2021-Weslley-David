/*26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.*/
const input = require('prompt-sync')()
function main(){
    // Entrada
    const lado_1 = Number(input('Digite um lado: '))
    const lado_2 = Number(input('Digite outro lado: '))
    const lado_3 = Number(input('Digite mais um lado: '))
    
    //Processamento
    if (lado_1 > lado_2 && lado_1 > lado_3){
        console.log('Hipotenusa: ', lado_1)
        console.log('Catetos   :', lado_2, 'e ',lado_3)
    }else if (lado_2 > lado_1 && lado_2 > lado_3){
        console.log('Hipotenusa: ', lado_2)
        console.log('Catetos   :', lado_1, 'e ',lado_3)
    }else{
        console.log('Hipotenusa: ', lado_3)
        console.log('Catetos   :', lado_1, 'e ',lado_2)
    }
}
main()