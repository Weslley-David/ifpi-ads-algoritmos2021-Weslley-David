const input = require('prompt-sync')()
function main(){
const n = new Array(5)
for (let i = 0; i < n.length; i++) {// criando vetor
    n[i] = new Array(3)
    
}
for (let i = 0; i < 5; i++) {//inserindo elementos
    for (let i2 = 0; i2 < 3; i2++) {
        n[i][i2] = i2 + 1
        
    }
    
}
console.log(n)
}
main()