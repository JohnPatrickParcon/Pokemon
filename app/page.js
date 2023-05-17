"use client"
import { useState } from "react";
import { useQuery } from "react-query"
import { getPokemonData } from "./indexComponents/FetchData";
import PokemonList from './indexComponents/PokemonList';
import Pagination from "./indexComponents/Pagination";

const page = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
  const {data, error, isLoading} = useQuery(["pokemonData", url], () => getPokemonData(url), {keepPreviousData: true});
  const { next, previous, results } = data || {};

  if (isLoading) { return <p>Loading, Please Wait.</p> } 
  if (error) { return <p>Error: {JSON.stringify(error)}</p> }

  return (
    <>
    <h2>Pokemon List</h2>
    <Pagination next={next} previous={previous} setUrl={setUrl}/>
    <PokemonList results={results} next={next} previous={previous}/>
    </>
  )
}
export default page