const input = require('prompt-sync')()
function main(){
const n = input('Digite uma palavra: ')
console.log(n[0])
console.log(n[n.length - 1])
console.log(n.charCodeAt([n.length - 1]))
}
main()