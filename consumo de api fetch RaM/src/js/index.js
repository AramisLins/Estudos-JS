fetch('https://rickandmortyapi.com/api/character') //requisição do tipo get para pegar dados no fetch
    // .catch()para saber se a requisição não foi bem sucedida
.then(response => response.json()) // .then() é pra saber se a requisição foi bem sucedida
    // a resposta que a gente quer do fetch vai ser um jason


.then(function(json) {

        var container = document.querySelector('.container');

        json.results.map(function(results){

            container.innerHTML +=`
                <div>
                    <img src= `+ results.image +`>
                    <p>`+ results.name +`</p>
                    <p>`+ results.species +`</p>
                </div>
        `;
        })
    })