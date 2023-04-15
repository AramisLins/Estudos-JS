
// iniciando funções
function sayHello(name){
    console.log(`Olá ${name}, seja bem vindo`)
}
sayHello('Aramis')

// retorno
function soma(n1,n2){
   const result = n1 + n2
    return result
}

const resultado = soma(1,1)
console.log(resultado)

// objeto argumentos
// pegar todos os argumentos passados

function somaArgumentos(){
    let result = 0
    for(const n of arguments){
        result = result + n
       
    }
    console.log(`A soma dos numeros ficou: ${result}`)
}

somaArgumentos(1,2,3,4)


// Valor X Referencia
function mult(n){
     n *= n // mesma coisa de n = n * n
     return n
     
}

let num = 10
console.log(mult(num))
console.log(num)

// Veja no console que a função me retorna um valor porém ela não muda o valor inicial da variável num 
// isso ocorre com variáveis normais, pois estamos passando para a função o valor (o que esta dentro de num) 
// e não a referencia (num)
// toda variável que não for objeto é passado o valor

// passando abaixo por referencia (objeto)

function multObj(obj){
    obj.value *= obj.value
    if(obj.value == 100){
        const teste = obj.value * obj.day
        console.log(teste)
    }
    return obj 
    
}

const numObj = {value : 10,  day: 2}
console.log(multObj(numObj))
console.log(numObj)

