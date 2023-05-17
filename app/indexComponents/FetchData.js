import axios from "axios";

export async function getPokemonData(url) {
    const response = await axios.get(url)
    return response.data;
}