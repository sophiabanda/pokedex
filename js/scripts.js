import fetch from "node-fetch";

let pokemonRepo = (function() {

    let pokemonList = []; 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

return {

    add: function(pokemon) {
        //how to make this work??
        if (typeof pokemon === 'object' && 'name') {
            pokemonList.push(pokemon);
        } else {
            console.log('Please input the name of a Pokemon.')
        }
    },

    getAll: function() {
        return pokemonList;
    },

    addListItem: function(pokemon) {

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
        })
        },

    loadList: function() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {  
            json.results.forEach(function (item) {
                let add = {
                    name: add.name,
                    detailsURL: item.url
                };
                add(item);
            });
        }).catch(function (e) {
            console.error(e);
        })
    },
    

    loadDetails: function (item) {
        let url = item.detailsURL;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.weight = details.weight;
            item.types = details.types;
            item.abilities = details.abilities;
        }).catch(function (e) {
            console.error(e);
        });
    },

 
}

})();
//End of IIFE


function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        console.log(pokemon);
    })
}



pokemonRepo.loadList().then(function () {
    pokemonRepo.getAll().forEach(function(pokemon) {
        pokemonRepo.addListItem(pokemon);
   });
});













