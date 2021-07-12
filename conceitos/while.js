const input = require('prompt-sync')()
function main(){
const n = Number(input('Digite um número: '))
let i = 0;
    while(i <= n){
        console.log(i)
        i++
    }
}
main()