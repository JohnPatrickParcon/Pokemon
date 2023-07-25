import axios from "axios";

export const ListURL ="https://pokeapi.co/api/v2/pokemon/"

export async function getPokemonData(url) {
    const response = await axios.get(url)
    return response.data;
}

export async function getSearchedPokemon(searchedPokemon) {
    if(searchedPokemon != null){
    const response = await axios.get(ListURL + `${searchedPokemon}`)
    return response.data;
    }
    return null
}

export async function getPokemonDataByName(name){
        const response =  await axios.get(ListURL + `${name}`)
        return response.data;
}