function NavBar({pokemonList, pokemonIndex, setpokemonIndex}) {

    const handlePokemonClick = (index) => {
      setpokemonIndex(index);
    };
    
    return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }

export default NavBar;