"use client"
import { useQuery } from "@tanstack/react-query";
import { getPokemonDataByName } from "@/app/api/FetchData";

const page = ({params}) => {
  const {data, isLoading, error} = useQuery(["pokemonDataByName", params.id],
    () => getPokemonDataByName(params.id), {refetchOnWindowFocus: false});
  
  const pokemon = {
    abilities: data?.abilities.map(ability => {return ability.ability.name}) || [],
    baseExp: data?.base_experience || 0,
    moves: data?.moves.map(move => {return move.move.name}) || [],
    sprite: data?.sprites.front_default || '',
    type: data?.types.map(type => {return type.type.name}) || [],
    hp: data?.stats[0].base_stat || 0,
    attack: data?.stats[1].base_stat || 0,
    defense: data?.stats[2].base_stat || 0,
    specialAttack: data?.stats[3].base_stat || 0,
    specialDefense: data?.stats[4].base_stat || 0,
    speed: data?.stats[5].base_stat || 0
  }

  if(isLoading) {
    return(
      <p>Loading, Please wait...</p>
    )
  }

  if(error) {
    return(
      <p>Error has occured: {error}</p>
    )
  }

  return (
    <>
    <div className="grid place-items-center p-12 pt-4">
      <img className="bg-amber-100 rounded-full" src={pokemon.sprite}></img>
      <h1 className="text-2xl p-1">{params.id}</h1>
      <ul className="grid grid-flow-col border-b-4 border-gray-300 gap-2 p-1">
        <p className="border-r-2 border-gray-600 p-2">Abilities</p>
        <div>
          {pokemon.abilities.map(ability => <li key={ability}>{ability}</li>)}
        </div>
      </ul>
      <div className="grid grid-flow-col border-b-4 border-gray-300 gap-2 p-1">
        <p className="border-r-2 border-gray-600 p-2">Base exp</p> 
        <p className="self-center">{pokemon.baseExp}</p>
      </div>
      <p>Stats</p>
      <ul className="grid grid-cols-2 gap-2 border-b-4 border-gray-300 p-1">
        <li key={'hp'}>HP | {pokemon.hp}</li>
        <li key={'attack'}>Attack | {pokemon.attack}</li>
        <li key={'defense'}>Defense | {pokemon.defense}</li>
        <li key={'speed'}>Speed | {pokemon.speed}</li>
        <li key={'specialAttack'}>Sp Attack | {pokemon.specialAttack}</li>
        <li key={'specialDefense'}>Sp Defense | {pokemon.specialDefense}</li>
      </ul>
      <ul className="grid grid-flow-col border-b-4 border-gray-300 gap-2 p-1">
        <p className="border-r-2 border-gray-600 p-2">Moves</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {pokemon.moves.map(move => <li key={move}>{move.replace(/-/g, " ")}</li>)}
        </div>
      </ul>
    </div>
    </>
  )
}

export default page