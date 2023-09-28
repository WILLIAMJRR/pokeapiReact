import { setNameTrainer } from '../store/slices/TrainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import videopokemon from '../assets/video/wefew.mp4';
import './style/home.css';
import pokelogo from '../assets/img/International_Pokémon_logo.svg.png';
//paso 7
const Home = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const handleSubmit = (e) => {

    e.preventDefault();


    dispatch(setNameTrainer(e.target.name.value.trim())); //es mejor capturarlo por el id


    e.target.name.value = '';

    
    navigate('/pokedex');
  };

  return (
    <div id='container_home'>
      <div className='home_img_con'>
        <img className='home_img' src={pokelogo} alt='' />
      </div>

      <video className='home_video' autoPlay loop muted playsInline>
        <source src={videopokemon} type='video/mp4' />
      </video>

      <div className='capa'></div>
      <div className='home_title'>
        <h2>Hi Trainer</h2>
        <p>To start this pokedex ,give me your name</p>
      </div>
      {/* paso 7.1 */}
      <form className='home_form' onSubmit={handleSubmit} action=''>
        <div>
          <input
            className='home_input'
            id='name'
            type='text'
            autoComplete='off'
            required
          />
        </div>
        <button className='home_btn'>
          <i className='fa-solid fa-magnifying-glass-arrow-right fa-2x'></i>
        </button>
      </form>
    </div>
  );
};

export default Home;
