import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../atoms/Pokecard';
import { useNavigate } from 'react-router-dom';
import Pagination from '../atoms/Pagination';
import Header from '../shared/Header';
import SelectTypes from '../atoms/SelectTypes';
import imgLogo from '../assets/img/image 12.png';
import imgpokebola from '../assets/img/871383.png';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();

  const [selectValue, setSelectValue] = useState('allpokemon');

  const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=200&offset=0`;

    axios
      .get(url)
      .then((res) => setPokemons(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (selectValue === 'allpokemon') {
      getPokemon();
    } else {
      // selectValue esta capturando los endpoint de selecttipe que esta en el handlechange
      //y aqui igaualamos el res.data.result de la peticion de los pokemones a la peticion de los tipos que es res.data.pokemon que viene de la captura del setSelecValue
      axios.get(selectValue).then((res) => {
        const results = res.data.pokemon.map((e) => e.pokemon);
        setPokemons({ results });
      });
    }
  }, [selectValue]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault;
    navigate(`/pokedex/${e.target.pokemon.value.trim().toLowerCase()}`);
    e.target.pokemon.value = '';
  };

  //pagination

  //curren page pagina actual
  const [page, setpage] = useState(1);

  const [pokemonPerPage, setPokemonPerPage] = useState(20);

  const lastIndex = page * pokemonPerPage; //1*20

  const firstIndex = lastIndex - pokemonPerPage; // 20-20

  //const initialPoke = (page - 1) * perPage;
  return (
    <div>
      <Header />

      <div className='pokedex_container'>
        <div className='poke_img'>
          <img className='poke_img1' src={imgLogo} alt='' />
          <img className='poke_img2' src={imgpokebola} alt='' />
        </div>
      </div>

      <div className='inputs_pokemon'>
        <p>Write the name of the pokemon</p>
        <form className='poke_form' onSubmit={handleSubmit}>
          <input
            className='poke_input'
            id='pokemon'
            type='text'
            autoComplete='off'
            placeholder=''
          />
          <button className='poke_btn'>
            <i className='fa-solid fa-magnifying-glass fa-2x'></i>
          </button>
        </form>
        <p>Type Pokemons</p>
        <SelectTypes setSelectValue={setSelectValue} />
      </div>

      <div className='card_container'>
        {pokemons?.results
          .map((pokemon) => (
            <Pokecard
              key={pokemon.url}
              //props
              pokemon={pokemon}
            />
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        pokemons={pokemons}
        pokemonPerPage={pokemonPerPage}
        setpage={setpage}
        page={page}
      />
    </div>
  );
};

export default Pokedex;
