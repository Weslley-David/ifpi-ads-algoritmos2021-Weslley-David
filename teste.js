
const input = require('prompt-sync')()
function main(){
    var arr = new Array(10)
    //Entrada
    for(cont = 0; cont < 10; cont++){
        arr[cont] = Number(input('Digite o número: '))
    }
    
    var min = arr[1]
    for(cont = 0; cont < 10; cont++){//menor valor
       min = Math.min(min, arr[cont]);
    }

    var max = arr[1]
    for(cont = 0; cont < 10; cont++){//maior valor
       max = Math.max(max, arr[cont]);
    }

    //Saída
    console.log('Resultado min:', min)
    console.log('Resultado max:', max)

}
main()  