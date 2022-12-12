
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
  
]



// for (let i = 0; i< pokemonList.length; i ++) {
//     //Using string interpolation and dot notation we have accessed the objects in the pokemon array.
//     //We aree interating over the array and printing the results to the dom for each found name + weight.

//     // console.log(`${pokemonList[i].name} weighs: ${pokemonList[i].weight}lbs. ` + "<br>")

//     //Here we use a conditional within out loop that will determine which pokemon is a 'strong weight' at over 25lbs
//     //once they're found, they will recieve a special message with their name and weight. 
//     if (pokemonList[i].weight > 25) {
//         document.write(`${pokemonList[i].name} has the most muscle mass, weighing in at ${pokemonList[i].weight}! ` + "<br>");
//     } else if (pokemonList[i].weight < 25) {
//         document.write(`${pokemonList[i].name} weighs ${pokemonList[i]. weight}lbs. ` + "<br>")
//     }
  
// }

// function printArrayDetails (list) {
//     for (let i = 0; i < list.length; i ++) {
//         // document.write("<p>" + list[i].name + "</p>");
//         console.log(list[i].name);
//     }
// }

// printArrayDetails(pokemonList)

pokemonList.forEach( function(poke) {
    console.log(poke.name);
    document.write(`${poke.name} weighs in at ${poke.weight}. <br>`)
})




