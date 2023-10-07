import PropTypes from "prop-types";
function PokemonCard({pokemon}) {
  const image = pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );

  return (
    <figure>
      {image}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
