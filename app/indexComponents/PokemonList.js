import PokemonInfo from "./PokemonInfo";
import styles from "../page.module.css";
import { useQuery } from "react-query";
const PokemonList = ({results}) => {
  return (
    <>
    <div className={styles.pokemonGrid}>
      {results.map(({name, url}) => 
        <PokemonInfo 
            key={name} 
            name={name} 
            url={url}
        />)}
    </div>
    </>
  )
}

export default PokemonList