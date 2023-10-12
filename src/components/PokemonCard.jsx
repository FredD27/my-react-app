import PropTypes from "prop-types";
import styles from './PokemonCard.module.css';

function PokemonCard ({pokemon}) {
  console.log(pokemon);
    return (
      <div>
        <figure className={styles.card}>
          <figcaption>{pokemon.name}</figcaption>
          {pokemon.imgSrc ?
            <img src={pokemon.imgSrc} alt="photo de Bulbasaur" className={styles.cardImg} />
           :
            <p>???</p>
          }
        </figure>
      </div>
    );
  }

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
