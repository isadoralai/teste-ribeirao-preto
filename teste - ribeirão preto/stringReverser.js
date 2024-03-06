const readline = require('readline-sync')

// Solicita ao usuário uma frase
const userString = readline.question('Digite um texto: ')

const charsArray = []

// Coloca a frase em um array
for(let i = 0; i < userString.length; i++){
    charsArray.push(userString[i])
}

// Coloca a frase em outro array, de forma reversa
const reverseCharsArray = []
for(let i = userString.length - 1; i >= 0; i--){
    reverseCharsArray.push(userString[i])
}

// Cria uma string com o array reverso
const reversString = reverseCharsArray.join('')


// Exibe a palavra no console
console.log(`A frase digitada é: ${userString}`)
console.log(`A frase reversa é: ${reversString}`)
