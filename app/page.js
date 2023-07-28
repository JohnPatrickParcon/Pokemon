"use client"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { getPokemonData, ListURL } from "./api/FetchData";
import PokemonList from './indexComponents/PokemonList';
import Pagination from "./indexComponents/Pagination";

const Page = () => {
  const [url, setUrl] = useState(ListURL)
  const {data, error, isLoading} = useQuery(["pokemonData", url], () => getPokemonData(url), {keepPreviousData: true});
  const { next, previous, results } = data || {};

  if (isLoading) { return <p>Loading, Please Wait.</p> } 
  if (error) { return <p>Error: {JSON.stringify(error)}</p> }

  return (
    <>
    <main>
      <Pagination next={next} previous={previous} setUrl={setUrl}/>
      <PokemonList results={results}/>
    </main>
    </>
  )
}
export default Page