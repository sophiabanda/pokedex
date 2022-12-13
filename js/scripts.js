
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
        //HAVE ENRIQUE EXPLAIN WHY THIS WORKS. 
        //This is also letting me add "weight: 21"
        if (typeof pokemon === 'object' && 'name') {
            return pokemonList.push(pokemon);
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
    }
}


})();


pokemonRepo.add({name: 'Pikachu'});
pokemonRepo.add({weight: 21})
console.log(pokemonRepo.getAll());

// pokemonRepo.getAll().forEach(function(pokemon) {
//     console.log(pokemon.name);
//     document.write(`${pokemon.name} weighs in at ${pokemon.weight}lbs<br>`)
// })












