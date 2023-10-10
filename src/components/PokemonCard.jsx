
function PokemonCard ({pokemon}) {
console.log(pokemon);

  return (
    <div>
      <figure>
        <figcaption>{pokemon.name}</figcaption>
        {pokemon.imgSrc ? 
          <img src={pokemon.imgSrc} alt="photo de Bulbasaur" />
         : 
          <p>???</p>
        }
      </figure>
    </div>
  );
};

export default PokemonCard;
