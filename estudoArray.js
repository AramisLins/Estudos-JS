
function estudoManipulação(){
// METODOS BASICOS DE MANIPULAÇÃO
let people = ['aramis', 'flavia', 'athos', 'aramisPai', 'Tatiana']
console.log(people)

// retornar elementos especificos de um array
console.log(people[2])

// retornar fatias
console.log(people.slice(2))
console.log(people.slice(1, 5))


// adicionar novos elementos no array
// adc no final
people.push('susi')
console.log(people)
// adc no inicio
people.unshift('lucia')
console.log(people)

// removendo elementos no array
// remove no fim do array
people.pop()
console.log(people)
// remove no inicio do array
people.shift()
console.log(people)

// remover fatias do array
people.splice(1, 2)
console.log(people)

// localizar elementos
let index = people.indexOf('aramis')
console.log(index)
//remover de acordo com a localização
people.splice(index, 1)
console.log(people)
}

// estudoManipulação() -> chamando o estudo de manipulação


function estudoConcatenacao(){
    let set1 = [1,2,3,4,5]
    let set2 = [6,7,8,9,10]
    console.log(set1.concat(set2)) // .concat serve pra concatenar arrays


}

// estudoConcatenacao() -> chamando o estudo de concatenação

function estudoDesestruturacao(){
    let set = [1,2,3,4,5]
    let [n1,n2,n3] = set
    console.log('n1', n1)
    console.log('n2', n2)
    console.log('n4', n3)

}
// estudoDesestruturacao() -> chamando o estudo de concatenação