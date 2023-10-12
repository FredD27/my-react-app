function NavBar({pokemonList, pokemonIndex, setpokemonIndex}) {

    const handlePokemonClick = (index) => {
      setpokemonIndex(index);

      if (pokemonList[index].name === "pikachu") {
        alert("Pika Pikachu !!!");
      }
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