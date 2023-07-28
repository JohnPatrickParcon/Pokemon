import Link from "next/link";
import { getPokemonData } from "../api/FetchData";
import { useQuery } from "@tanstack/react-query";

const PokemonInfo = ({name, url}) => {
    const {data, error} = useQuery(["pokemonData", url], () => getPokemonData(url), {refetchOnWindowFocus: false});
    const {sprites:{front_default} = ""} = data || {}

    if (error) { return <p>Error: {JSON.stringify(error)}</p> }

  return (
    <>
    <Link href={`/pokemon/${name}`}>
      <div className="border-2 border-black rounded-lg p-2.5 px-10 text-center transition-colors ease-in-out hover:bg-slate-500">
        <img src={front_default}></img>
        <p>{name}</p>
      </div>
    </Link>
    </>
  )
}

export default PokemonInfo