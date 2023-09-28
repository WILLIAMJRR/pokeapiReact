import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles/pokecard.css';
import './styles/BackGroundCard.css';
import { useNavigate } from 'react-router-dom';

const Pokecard = ({ pokemon }) => {
  const [poke, setPoke] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => {
        setPoke(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`);
  };
  return (
    <article
      onClick={handleClick}
      className={`card border-${poke?.types[0].type.name}`}
    >
      <div className='card_poke'>
        <header className={`card_header bg-${poke?.types[0].type.name}`}>
          <img
            className='card_img'
            src={poke?.sprites.other.dream_world.front_default}
            alt={poke?.name}
          />
        </header>
        <div className='card_content'>
          <h2 className={`card_name color-${poke?.types[0].type.name}`}>
            {poke?.name}
          </h2>
          <div className={`card_type`}>
            <p className={`color-${poke?.types[0].type.name}`}>Type</p>
            <ul className='type_card'>
              {poke?.types.map((type) => (
                <li key={type.type.name}>
                  <span>{type.type.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className='card_ul'>
            {poke?.stats.map((stat) => (
              <li className='card_li' key={stat.stat.url}>
                <span>{stat.stat.name} : </span>
                <span
                  className={`card_state color-${poke?.types[0].type.name}`}
                >
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Pokecard;
