function listarPokemonHtml(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          <li class="type">Grass</li>
          <li class="type">Poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon">
      
      </div>
    </li>
    `;
}

const pokemonsList = document.getElementById("pokemonslist");
pokeapi.getpokemon().then((e) => {
  for (let i = 0; i < e.length; i++) {
    const pokemons = e[i];
    pokemonsList.innerHTML += listarPokemonHtml(pokemons);
  }
});
