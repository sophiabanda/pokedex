

let pokemonRepo = (function() {

    let pokemonList = []; 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

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
        let pokeItem = $('<li></li> .group-list-item');
        // let pokeButton = document.createElement('button');
        let pokeButton = $('<button data-target="modal" data-toggle="modal">' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + '</button>');
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

            item.imageUrl = details.sprites.front_default;
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
        let pokeImage = $('<img class="modal-img" style="width:50%">');
        pokeImage.attr('src', pokemon.imageUrl);
        // let pokeHeight = $('<p> + Height: ${pokemon.height}ft. tall + </p>');
        // let pokeWeight = $('<p>`Weight: ${pokemon.weight}lbs`</p>');
        // let pokeTypes = $('<p>`Types: ${pokemon.types}`</p>');
        // let pokeAbilities = $('<p>Abilities: ${pokemon.abilities}</p>');
        

        modalTitle.append(pokeName);
        modalBody.append(pokeImage);
        // modalBody.append(pokeHeight);
        // modalBody.append(pokeWeight);
        // modalBody.append(pokeTypes);
        // modalBody.append(pokeAbilities);

        
        //Clear existing modal content:
        // let pokeModal = document.querySelector('#poke-modal-container');
        // pokeModal.innerHTML = '';
    
        // let modal = document.createElement('div');
        // modal.classList.add('modal');
    
        // let closeButton = document.createElement('button');
        // closeButton.classList.add('modal-close');
        // closeButton.innerText = 'Close';
        // closeButton.addEventListener('click', hideModal);
    
        // let pokeNameTitle = document.createElement('h1');
        // pokeNameTitle.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        // let pokeWeight = document.createElement('p');
        // pokeWeight.innerText = `Weight: ${pokemon.weight}lbs`;

        // let pokeHeight = document.createElement('p');
        // pokeHeight.innerText = `Height: ${pokemon.height}ft. tall`;

        // let pokeImage = document.createElement('img');
        // pokeImage.src = pokemon.imageUrl;

        // let pokeTypes = document.createElement('p');
        // pokeTypes.innerText = `Types: ${pokemon.types}`;

        // let pokeAbilities = document.createElement('p');
        // pokeAbilities.innerText = `Abilities: ${pokemon.abilities}`;

        // //Attach all the aforementioned to the modal that was created. 
        // modal.appendChild(closeButton);
        // modal.appendChild(pokeNameTitle);
        // modal.appendChild(pokeWeight);
        // modal.appendChild(pokeImage);
        // modal.appendChild(pokeHeight);
        // modal.appendChild(pokeTypes);
        // modal.appendChild(pokeAbilities);
        // pokeModal.appendChild(modal);
    
        // pokeModal.classList.add('is-visible');

        // pokeModal.addEventListener('click', (e) => {
        //     let target = e.target;
        //     if (target === pokeModal) {
        //         hideModal();
        //     }
        // });
    
    }


    // function hideModal() {
    //     let pokeModal = document.querySelector('#poke-modal-container');
    //     pokeModal.classList.remove('is-visible');
    // }

    // window.addEventListener('keydown', (e) => {
    //     let pokeModal = document.querySelector('#poke-modal-container');
    // })
    

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















