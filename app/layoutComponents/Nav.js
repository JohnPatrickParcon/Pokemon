import Link from "next/link"
import { useState } from "react"
import useDebounce from "./useDebounce";
import { useQuery } from "@tanstack/react-query";
import { getSearchedPokemon } from "../api/FetchData";
import Image from "next/image";

const Nav = () => {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState(false);
  const debouncedSearch = useDebounce(search, 1000) || null
  const {data, error, isloading} = useQuery(['searchPokemon', debouncedSearch], () => getSearchedPokemon(debouncedSearch), {refetchOnWindowFocus: false});
  const searchHandler = (e) => {setSearch(e.target.value)};
  return (
      <nav className="grid grid-cols-2 bg-red-700">
          <Link 
            href={'./'}
            onClick={() => {setShowResult(false)}}>
            <h1 className="p-2.5 pl-5 text-left text-2xl">Pokemon List</h1>
          </Link>
          <div className="relative p-3 text-end">
            <input 
              className="sm:w-1/4 md:w-2/4 lg:w-3/4 p-1 mr-2.5 rounded-lg text-lg bg-black text-slate-500"
              type="search" 
              placeholder="Pokemon name"
              value={search}
              onChange={searchHandler}
              onClick={() => setShowResult(!showResult)}>
            </input>
              {data && showResult?
                <div
                  className="absolute right-6 w-64 p-3 rounded-lg bg-slate-600 text-slate-100">
                  <Link href={`/pokemon/${data.name}`} onClick={() => {setShowResult(false)}}>
                    <Image className="mx-16" src={data.sprites.front_default} alt={`image of ${data.name}`}/>
                    <h2 className="text-center">{data.name}</h2>
                  </Link>
                </div>
                : null}
          </div>
      </nav>
  )
}

export default Nav