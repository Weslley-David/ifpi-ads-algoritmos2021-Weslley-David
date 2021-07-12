/*7. Leia um verbo regular terminado em ER e mostre sua conjugação no presente.*/
const input = require('prompt-sync')()
function main(){
const verbo = input('Digite um verbo terminado em ER: ')
let radical = verbo.substr(0, verbo.length-2)
console.log(radical)
console.log(`Singular: `)
console.log(`1* pessoa: Eu ${radical + 'o'}`)
console.log(`2* pessoa: Você ${radical + 'e'}`)
console.log(`3* pessoa: Ele/Ela ${radical + 'e'}`)
console.log(`Plural: `)
console.log(`1* pessoa: Nós ${radical + 'emos'}`)
console.log(`2* pessoa: Vocês ${radical + 'em'}`)
console.log(`3* pessoa: Eles/Elas ${radical + 'em'}`)
}
main()