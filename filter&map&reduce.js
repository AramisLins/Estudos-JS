function estudoFilter() {
    // função para filtrar algo dentro de array
    const numbers = [10, 18, 1, 15]

    let res = numbers.filter((item) => item > 10)
    console.log(res)

    const people = [
        { name: 'aramis', gender: 'M', age: 24 },
        { name: 'flavia', gender: 'F', age: 22 },
        { name: 'Heloisa', gender: 'F', age: 9 },
        { name: 'athos', gender: 'M', age: 12 },
    ]

    const maiordeIdade = people.filter((p) => p.age <= 18 && p.gender === 'F')

    console.log(maiordeIdade)
}
// estudoFilter()  -> chamando os estudos de filter

function estudoMap() {
    // map executa uma determinada ação em todos os elementos do array
    const numbers = [1, 2, 3, 4, 5, 6]

    const double = numbers.map((item) => item * 2)
    console.log(double)
    // nivelando o conjuto de dados
    const pessoas = [
        { name: 'joseFIna', age: 40 },
        { name: 'GraduAdo', age: 40 },
        { name: 'FilhoProdigio', age: 40 },
        { name: 'JOSEna', age: 40 },
    ]

    const nivelarNomes = pessoas.map((p) => p.name.toLowerCase())
    console.log(nivelarNomes)
}
// estudoMap() -> chamando os estudos de map



