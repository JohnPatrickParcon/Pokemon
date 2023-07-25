import PokemonInfo from "./PokemonInfo";

const PokemonList = ({results}) => {
  return (
    <>
    <div className="grid grid-cols-4 place-items-center bg-amber-200">
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