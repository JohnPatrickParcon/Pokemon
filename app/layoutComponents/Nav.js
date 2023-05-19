import Link from "next/link"
import { useState } from "react"
import useDebounce from "./useDebounce";
import { useQuery } from "react-query";
import { getSearchedPokemon } from "../api/FetchData";

const Nav = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000) || null
  const {data, error, isloading} = useQuery(['searchPokemon', debouncedSearch], () => getSearchedPokemon(debouncedSearch));

  const searchHandler = (e) => {setSearch(e.target.value)};
  return (
      <nav>
          <Link href={'./'}>Home</Link>
          <div>
            <input 
              type="search" 
              placeholder="Pokemon name"
              value={search}
              onChange={searchHandler}></input>
            <select type="text"></select>
          </div>
      </nav>
  )
}

export default Nav