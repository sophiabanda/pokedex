
let pokemonRepo = (function() {

    let pokemonList = []; 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (typeof pokemon === 'object' && 'name') {
            pokemonList.push(pokemon);
        } else {
            console.log('Please input the name of a Pokemon.')
        };
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem (pokemon) {

        if (typeof document !== 'undefined' ) {

        let pokeList = document.querySelector('.pokemon-list');
        let pokeItem = document.createElement('li');
        let pokeButton = document.createElement('button');
        pokeButton.innerText = pokemon.name;
        pokeButton.classList.add('button-class');
        pokeItem.appendChild(pokeButton);
        pokeList.appendChild(pokeItem);
        pokeButton.addEventListener('click', function() {
            console.log(pokemon.name);
            console.log(pokemon.weight);
            console.log(pokemon.abilities);
            showDetails(pokemon);
        });
        }

    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {  
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsURL: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(item) {
        let url = item.detailsURL;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            // item.weight = details.weight;
            item.types = details.types;
            // item.abilities = details.abilities;
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails

    }
}
)();
//End of IIFE


function showDetails(pokemon) {
    pokemonRepo.loadDetails(pokemon).then(function () {
    });
}


pokemonRepo.loadList().then(function () {
    pokemonRepo.getAll().forEach(function(pokemon) {
        pokemonRepo.addListItem(pokemon);
   });
});













