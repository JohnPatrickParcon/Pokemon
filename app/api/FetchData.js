import axios from "axios";

export const ListURL ="https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"

export async function getPokemonData(url) {
    const response = await axios.get(url)
    return response.data;
}