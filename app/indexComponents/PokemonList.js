import PokemonInfo from "./PokemonInfo";

const PokemonList = ({results, next, previous, setUrl}) => {
  return (
    <>
    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-5 place-items-center">
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