

let pokemonRepo = (function() {

    let pokemonList = []; 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=500';

    //Returns Pokemon array:
    function getAll() {
        return pokemonList;
    }

    //Adds new Pokemon to array if aligns with parameters (WIP):
    function add(pokemon) {
        if (typeof pokemon === 'object' && 'name') {
            pokemonList.push(pokemon);
        } else {
            console.log('Please input the name of a Pokemon.')
        };
    }


    function loadList() {
        //Calls on api to return json file
        return fetch(apiUrl).then(function (response) {
        return response.json()
        
        //Then we sort through array to pull out specific portions utilizing forEach and dot notation:
        }).then(function (json) {  
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsURL: item.url
                };
                //Adds each pokemon to the list
                add(pokemon);
            });

        }).catch(function (e) {
            console.error(e);
        });
    }

    function addListItem (pokemon) {

        // let pokeList = document.querySelector('.list-group');
        let pokeList = $('.list-group');
        // let pokeItem = document.createElement('li');
        let pokeItem = $('<li class="col-4"></li> ');
        // let pokeButton = document.createElement('button');
        let pokeButton = $('<button class="btn btn-light" data-target="#poke-modal" data-toggle="modal">' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + '</button>');
        // pokeButton.classList.add('button-class');
        pokeItem.append(pokeButton);
        pokeList.append(pokeItem);
        pokeButton.on('click', function() {
            console.log(pokemon.name);
            showDetails(pokemon);
        });
    }


    function loadDetails(item) {
        let url = item.detailsURL;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {

            item.imageFront = details.sprites.front_default;
            item.imageBack = details.sprites.back_default;
            //Map arrow function to access deeper levels of object:
            item.types = details.types.map((type) => ' ' + type.type.name);
            item.weight = details.weight;
            item.abilities = details.abilities.map((ability) => ' ' + ability.ability.name);
            item.height = details.height;

        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        pokemonRepo.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }
        
    function showModal(pokemon) {

        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalBody.empty();
        modalTitle.empty();
        
        let pokeName = $('<h1>' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + '</h1>');
        let pokeImageFront = $('<img class="modal-img" style="width:50%">');
        pokeImageFront.attr('src', pokemon.imageFront);
        let pokeImageBack = $('<img class="modal-img">');
        pokeImageBack.attr('src', pokemon.imageBack)
        let pokeHeight = $('<p>' + `Height: ${pokemon.height}ft. tall` + '</p>');
        let pokeWeight = $('<p>' + `Weight: ${pokemon.weight}lbs` + '</p>');
        let pokeTypes = $('<p>' + `Types: ${pokemon.types}` + '</p>');
        let pokeAbilities = $('<p>' + `Abilities: ${pokemon.abilities}` + '</p>');
        

        modalTitle.append(pokeName);
        modalBody.append(pokeImageFront);
        modalBody.append(pokeImageBack);
        modalBody.append(pokeHeight);
        modalBody.append(pokeWeight);
        modalBody.append(pokeTypes);
        modalBody.append(pokeAbilities);

    
    }



    

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails

    }
}
)();
//End of IIFE


pokemonRepo.loadList().then(function () {
    pokemonRepo.getAll().forEach(function(pokemon) {
        pokemonRepo.addListItem(pokemon);
   });
});















