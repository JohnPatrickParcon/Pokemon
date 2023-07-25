"use client"
import { useQuery } from "@tanstack/react-query";
import { getPokemonDataByName } from "@/app/api/FetchData";

const page = ({params}) => {
  const {data, isLoading, error} = useQuery(["pokemonDataByName", params.id], () => getPokemonDataByName(params.id), {refetchOnWindowFocus: false});
  
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
console.log(pokemon.moves);
  if(isLoading) {
    return(
      <p>Loading, Please wait...</p>
    )
  }

  if(error) {
    return(
      <p>{error}</p>
    )
  }
  return (
    <>
    <div>{params.id}</div>
    <div>
      <img src={pokemon.sprite}></img>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map(ability => <li key={ability}>{ability}</li>)}
      </ul>
      <p>Base exp: {pokemon.baseExp}</p>
      <p>Stats</p>
      <ul>
        <li key={'hp'}>HP: {pokemon.hp}</li>
        <li key={'attack'}>Attack: {pokemon.attack}</li>
        <li key={'defense'}>Defense: {pokemon.defense}</li>
        <li key={'specialAttack'}>Sp Attack: {pokemon.specialAttack}</li>
        <li key={'specualDefense'}>Sp Defense: {pokemon.specialDefense}</li>
        <li key={'speed'}>Speed: {pokemon.speed}</li>
      </ul>
      <p>Moves: </p>
      <ul>
        {pokemon.moves.map(move => <li key={move}>{move.replace(/-/g, " ")}</li>)}
      </ul>
    </div>
    </>
  )
}

export default page