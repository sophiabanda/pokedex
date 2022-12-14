
let pokemonRepo = (function() {

    let pokemonList = [

    { 
        name: "Balbasaur",
        weight: 15.2,
        types: ['grass', 'poison'],
        abilities: 'overgrow',
        category: 'seed',
    },

    { 
        name: "Ivysaur",
        weight: 28.7,
        types: ['grass', 'poison'],
        abilities: 'overgrow',
        category: 'seed',
    },

    { 
        name: "Charmander",
        weight: 18.7,
        types: ['fire'],
        abilities: 'blaze',
        category: 'lizard',
    },

    { 
        name: "Metapod",
        weight: 21.8,
        types: ['bug'],
        abilities: 'shed skin',
        category: 'cocoon',
    },
  
]; 

return {
    // add: function(pokemon) {
    //     pokemonList.push(pokemon)
    // },

    //solution one-----------------------------
    add: function(pokemon) {
        //how to make this work??
        if (typeof pokemon === 'object' && 'name') {
            pokemonList.push(pokemon);
        } else {
            console.log('Please input the name of a Pokemon.')
        }
},
// // ORIGINAL SOLUTION---------------------------------------------------
// if (typeof pokemon === 'string') {
//     return pokemonList.push(pokemon);
// } else {
//     console.log('Please input the name of a Pokemon.')
// }
// },

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
    pokeButton.addEventListener('click', function(pokemon) {
        console.log(pokemon);
    })
    },

    showDetails: function(pokemon) {
        console.log(pokemon);
    }
}


})();


pokemonRepo.getAll().forEach(function(pokemon) {
     pokemonRepo.addListItem(pokemon);
})



pokemonRepo.add({name: 'Pikachu'});
// pokemonRepo.add({weight: 21});
// console.log(pokemonRepo.getAll());











