/*40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).*/
const input = require('prompt-sync')()

// Entrada
const anos_fumante = input('A quantos anos você fuma? ')
const cigarros_dia = input('Quantos cigarros você fuma por dia? ')
const preco_cigarro = input('Qual o preço de uma carteira de cigarros?')

// Processamento
const dinheiro_gasto = ((cigarros_dia * (anos_fumante*365))/20) * preco_cigarro

// Saída
console.log('Você já gastou R$: ', dinheiro_gasto.toFixed(2))