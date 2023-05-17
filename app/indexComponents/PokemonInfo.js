import { getPokemonData } from "./FetchData";
import { useQuery } from "react-query";

const PokemonInfo = ({name, url}) => {
    const {data, error} = useQuery(["pokemonData", url], () => getPokemonData(url));
    const {sprites:{front_default} = ""} = data || {}

    if (error) { return <p>Error: {JSON.stringify(error)}</p> }

  return (
    <>
    <div>
      <img src={front_default}></img>
      <p>{name}</p>
    </div>
    </>
  )
}

export default PokemonInfo