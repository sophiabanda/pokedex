//I'm having a hard time understanding the commonatlities between all of the functions. How is each accessing data?

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
                // ** I don't quite understand what this does. Retrieving all 100, or accessing list of 100 in order to add the next?
                add(pokemon);
            });

        }).catch(function (e) {
            console.error(e);
        });
    }

    function addListItem (pokemon) {

        let pokeList = document.querySelector('.pokemon-list');
        let pokeItem = document.createElement('li');
        let pokeButton = document.createElement('button');
        pokeButton.innerText = pokemon.name;
        pokeButton.classList.add('button-class');
        pokeItem.appendChild(pokeButton);
        pokeList.appendChild(pokeItem);
        pokeButton.addEventListener('click', function() {
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
            item.types = details.types;
            item.weight = details.weight;
            item.abilities = details.abilities;
            item.height = details.height;
            item.species = details.species.name;

            console.log(details.weight);
            console.log(details.types);
            console.log(details.height);
            console.log(details.sprites.front_default);

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
        //Clear existing modal content:
        let pokeModal = document.querySelector('#poke-modal-container');
        pokeModal.innerHTML = '';
    
        let modal = document.createElement('div');
        modal.classList.add('modal');
    
        let closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', hideModal);
    
        let pokeNameTitle = document.createElement('h1');
        pokeNameTitle.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        let pokeWeight = document.createElement('p');
        pokeWeight.innerText = `Weighs in at ${pokemon.weight}lbs.`;

        let pokeHeight = document.createElement('p');
        pokeHeight.innerText = `Stands at ${pokemon.height}ft. tall.`;

        let pokeImage = document.createElement('img');
        pokeImage.src = pokemon.imageUrl;

        modal.appendChild(closeButton);
        modal.appendChild(pokeNameTitle);
        modal.appendChild(pokeWeight);
        modal.appendChild(pokeHeight);
        modal.appendChild(pokeImage);
        pokeModal.appendChild(modal);
    
        pokeModal.classList.add('is-visible');

        pokeModal.addEventListener('click', (e) => {
            let target = e.target;
            if (target === pokeModal) {
                hideModal();
            }
        });
    
    }

    function hideModal() {
        let pokeModal = document.querySelector('#poke-modal-container');
        pokeModal.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        let pokeModal = document.querySelector('#poke-modal-container');
    })
    
    // document.querySelector('#show-modal').addEventListener('click', () => {
    //     showModal('Title', 'Content');
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















