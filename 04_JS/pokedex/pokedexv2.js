const pokeContainer = document.querySelector('.pokemonContainer');


const fetchPokemon=() =>{
    const pokeNameInput = document.getElementById("pokeSearch");
    let name = pokeNameInput.value;
    name=name.toLowerCase();
    let url = (`https://pokeapi.co/api/v2/pokemon/${name}`);
    fetch(url).then((res) => {
        if(res.status !="200"){
            console.log(res);
            searchError("/pokedex/images/pikachu_fainted.jpg")
        } else{
        return res.json();
    }
     }).then((data) => {
         if(data){
             console.log(data);
             printPokemon(data);
             console.log(data);
         }
        
        
    })

}

const printPokemon = (pokemon)=> {

    const imageContainer = document.getElementById('imageSpace');
    imageContainer.classList.add('pokeSpace');

    const pokeImage = document.getElementById('pokeImg');
    pokeImage.src = pokemon.sprites.front_default;

    const number = document.getElementById('pokeNum');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.getElementById('pokeName');
    name.textContent = pokemon.name;
    
    const type = document.getElementById('pokeType');
    type.textContent = pokemon.types[0].type.name

    const height = document.getElementById('pokeHei');
    height.textContent=pokemon.height

    const weight = document.getElementById('pokeWei');
    weight.textContent=pokemon.weight

    const ability1 = document.getElementById   ('pokeAbi1');
    ability1.textContent=pokemon.abilities[0].ability.name

    const ability2 = document.getElementById('pokeAbi2');
    ability2.textContent=pokemon.abilities[1].ability.name

    imageContainer.appendChild(pokeImage);

}
const searchError = (url) =>{
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}