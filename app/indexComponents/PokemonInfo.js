import Link from "next/link";
import { getPokemonData } from "../api/FetchData";
import { useQuery } from "@tanstack/react-query";

const PokemonInfo = ({name, url}) => {
    const {data, error} = useQuery(["pokemonData", url], () => getPokemonData(url), {refetchOnWindowFocus: false});
    const {sprites:{front_default} = ""} = data || {}

    if (error) { return <p>Error: {JSON.stringify(error)}</p> }

  return (
    <>
    <div className="text-center">
      <Link href={`/pokemon/${name}`}>
        <img src={front_default}></img>
        <p>{name}</p>
      </Link>
    </div>
    </>
  )
}

export default PokemonInfo