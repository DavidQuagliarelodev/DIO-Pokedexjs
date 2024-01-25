const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url).then((e)=>{
    console.log(e)
}).catch((e)=>{
    console.log("Error" + e)
})
