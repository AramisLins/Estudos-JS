// condição if,  else if, else
const a = 4

if (a == 1) {
    console.log('verdadeiro')
} else if (a > 3) {
    console.log('maior que 3')
} else {
    console.log('erro')
}

// condição if ternario
// variavel = (condição) ? IF : ELSE
let texto = "a"
let valor

valor = (texto == "a") ? 10 : 20
console.log(valor)

// condição switch case
//  não consegue fazer analises complexas, só analises de igualdade !
const sw = 5

switch (sw) {
    case 1:
        console.log('condição 1')
        break
    case 2:
        console.log('condição 2')
        break
    case 3:
    case 4:
        console.log('condição 3 e 4')
        break
    default:
        console.log('erro')
        break
}

// condição try catch
// descobrir erros externos, api, BD, arquivos
try {
    // executar algo
    // consultar api, banco de dados, arquivos
    throw 'Erro 1032 ao conectar o bando de dados'
} catch (error) {
    // erro
    alert('erro de execução generico') // mostrar para o usuario que deu erro de forma generica
    console.error(error) // mostrar no console o erro que retornou, de forma mais tecnica para o dev
} finally {
    // sempre executa ao final (opcional)
    console.log('execução final')
}
