// enquanto a condição for verdadeira, execute
let contador = 1

while (contador <= 4) {
    console.log(`Numero : ${contador}`)
    contador++
}


// repetição for

for (let i = 0; i < 3; i++) {
    console.log(i)
}

// percorrendo arrays e incrementando sobrenome a todos
const nomes = ['flavia', 'aramis', 'athos']

for (let i = 0; i < 3; i++) {
    console.log(nomes[i] = nomes[i] + ' vivo')

}
console.log(nomes)

// for of percorre e guarda em outra variavel , interação em arrays
for (const newName of nomes) {
    console.log(newName)

}

// for in, interação entre objetos
// ele retorna a propriedade do objeto
const carro = {
    marca: 'volvo',
    valor: 40000,
    tipo: 'suv'
}

for (const compra in carro) {
    console.log(`prop - ${compra} - ${carro[compra]}`)
}