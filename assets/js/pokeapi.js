const pokeapi = {
  getpokemon(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        return e.results;
      });
  },
};
