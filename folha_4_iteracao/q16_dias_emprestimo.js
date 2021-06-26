const input = require('prompt-sync')()
function main(){
let emprestimo = 3000
let dia = 0
    while(emprestimo > 0 ){
        emprestimo = emprestimo - 198,30
        dia = dia + 1
    }
    console.log(`dias: ${dia}`)
}
main()