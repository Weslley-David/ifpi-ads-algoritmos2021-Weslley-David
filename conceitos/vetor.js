const input = require('prompt-sync')()
function main(){
const n = new Array(5)//criando vetor


for (let i = 0; i < n.length; i++) {
    n[i] = i + 1
    
}
console.log(n)
}
main()