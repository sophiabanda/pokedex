
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
//     add: function(pokemon) {
//         if (typeof pokemon === 'string') {
//             return pokemonList.push(pokemon);
//         } else {
//             console.log('Please input the name of a Pokemon.')
//         }
// },
// solution two---------------------------------------------------
//     add: function(pokemon) {
//        if (pokemon === Object.keys('string')) {
//         pokemonList.push(pokemon);
// }},
    
    getAll: function() {
        return pokemonList;
    }
}


})();


pokemonRepo.add({name: 'Pikachu'});
// console.log(pokemonRepo.add2({name: 'Ellen'}));
console.log(pokemonRepo.getAll());







// pokemonRepo.getAll().forEach(function(pokemon) {
//     console.log(pokemon.name);
//     document.write(`${pokemon.name} weighs in at ${pokemon.weight}lbs<br>`)
// })






