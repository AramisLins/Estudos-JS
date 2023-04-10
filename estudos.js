
// // estudos de objetos


const person = {
    name: 'Aramis',
    age: 24,
    address: {
        street: 'Av.Central',
        city: 'São José dos Campos',
    },
}

console.log(person)
person.hairColor = 'Black'
person.name = 'Aramis Lins'
console.log(person.age)
console.log(`meu nome é ${person.name}`)


// // estudo de array

const persons = ['flavia', 'nena', 'mc', 'tatiana']
persons[0] = 'Fl Martins'

console.log(persons[0])

// Estudos de date
const bornDate = new Date()

console.log(bornDate)

console.log("dia", bornDate.getDate())
console.log("Mês", bornDate.getMonth() + 1) // ele retorna de de 0 a 11, por isso a soma de +1 pra n enganar o usuario
console.log("ano", bornDate.getFullYear())

// bibliotecas para ser usadas ( momentjs.com // date-fns.org) auxiliar na manipulação de datas e uma melhor apresentação


