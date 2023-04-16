// Conversação e Manipulação de dados
// Type casting e type coersion

// type casting = conversão pelo usuario
// type coersion = conversão "coercitiva" pela vm


// -----------------------------------------------
// number <-> string
console.log(Number('2') + 2)
console.log('a' + String(2))

// string <-> date
console.log(new Date())
console.log(new Date('04 30 2022'))

// string <-> Array


let values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(values.join(" "))

let name = 'Felipe Fontoura'
console.log(name.split(" "))

// Casas decimais - formatação e arredondamento 
// toFixed()
// Math.ceil()
// Math.floor()
// math.round()
let value = 1234.56
console.log(value.toFixed(1)) // arredonda e deixa uma casa
console.log(Math.ceil(value)) // arredonda pra cima e tira todas as casas 
console.log(Math.floor(value)) // arredonda pra baixo e tira todas as casas


// contando digitos 
// transformar digito em string
let num = 12345
console.log(String(num).length)


// separando e juntando strings

let frase = 'Eu sou um cara lindo'

console.log(frase.split(' ').join('')) // separando e depois jutando sem espaço

// maiusculo ou minusculo 
// serve para nivelar valores em string
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())

// localizar uma string ou caractere
console.log(frase.includes('lindo'))
// retornando true ou false, encontrando ou não a string ou caractere

// substituir string
console.log(frase.replace('lindo', 'gostoso'))

// convertendo JSON
// JSON - JavaScript Object Notation
// JSON.stringify()
// JSON.parse()
const people = [
    {
        id: 1,
        name: "Aramis",
        lastName: "Lins",
        bornDate: new Date(1998, 10, 08),
        address: {
            city: "Pau dos Ferros",
        },
    },
    {
        id: 2,
        name: "Flavia",
        lastName: "Martins",
        bornDate: new Date(2001, 10, 28),
        address: {
            city: "Campina Grande",
        },
    },
]

console.log(JSON.stringify(people)) // conversão obj -> string / JSON

const json =
      '[{"id":1,"name":"Felipe","lastName":"Fontoura","bornDate":"1982-02-18T03:00:00.000Z","address":{"city":"São José dos Campos"}},{"id":2,"name":"Eduardo","lastName":"Moraes","bornDate":"2001-04-05T03:00:00.000Z","address":{"city":"Recife"}}]'
console.log(JSON.parse(json)) // converte uma string / JSON -> obj






