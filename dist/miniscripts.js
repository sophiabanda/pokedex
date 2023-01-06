let pokemonRepo=function(){let t=[];function e(){return t}function n(e){"object"==typeof e?t.push(e):console.log("Please input the name of a Pokemon.")}function o(t){return fetch(t.detailsURL).then(function(t){return t.json()}).then(function(e){t.imageFront=e.sprites.front_default,t.imageBack=e.sprites.back_default,t.types=e.types.map(t=>" "+t.type.name),t.weight=e.weight,t.abilities=e.abilities.map(t=>" "+t.ability.name),t.height=e.height}).catch(function(t){console.error(t)})}function a(t){pokemonRepo.loadDetails(t).then(function(){var e;let n,o,a,i,p,l,s,c,r;e=t,n=$(".modal-body"),o=$(".modal-title"),n.empty(),o.empty(),a=$("<h1>"+e.name.charAt(0).toUpperCase()+e.name.slice(1)+"</h1>"),i=$('<img style="width:30%" class="modal-img">'),i.attr("src",e.imageFront),p=$('<img class="modal-img">'),p.attr("src",e.imageBack),l=$(`<p>Height: ${e.height}ft. tall</p>`),s=$(`<p>Weight: ${e.weight}lbs</p>`),c=$(`<p>Types: ${e.types}</p>`),r=$(`<p>Abilities: ${e.abilities}</p>`),o.append(a),n.append(i),n.append(p),n.append(l),n.append(s),n.append(c),n.append(r)})}return $(document).ready(function(){$("#search-form").on("keyup",function(){let t=$(this).val().toLowerCase();$(".col").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})}),{add:n,getAll:e,addListItem:function t(e){o(e).then(function(){let t=$(".list-group"),n=$('<li class="col"></li> '),o=$('<button class="btn btn-light pokebutton" data-target="#poke-modal" data-toggle="modal"></button>'),i=$("<h4>"+e.name.charAt(0).toUpperCase()+e.name.slice(1)+"</h2>"),p=$("<img>");p.attr("src",e.imageFront),o.append(i),o.append(p),n.append(o),t.append(n),o.on("click",function(){console.log(e.name),a(e)})})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=1200").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsURL:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:a}}();pokemonRepo.loadList().then(function(){pokemonRepo.getAll().forEach(function(t){pokemonRepo.addListItem(t)})});