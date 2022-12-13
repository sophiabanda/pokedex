
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

    add: function(pokemon) {
        if (typeof pokemon === 'string') {
            pokemonList.push(pokemon);
        } else {
            console.log(`Please input a Pokemon name here.`);
        }
},
    
    getAll: function() {
        return pokemonList;
    }
}


})();


console.log(pokemonRepo.add({name: 'Pikachu'}));
console.log(pokemonRepo.getAll());
console.log(pokemonRepo)





// pokemonRepo.getAll().forEach(function(pokemon) {
//     console.log(pokemon.name);
//     document.write(`${pokemon.name} weighs in at ${pokemon.weight}lbs<br>`)
// })






