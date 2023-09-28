import './App.css';
import Home from './molecules/Home';
import { Route, Routes } from 'react-router-dom';
import ProtecteRoutes from './molecules/ProtecteRoutes';
import Pokedex from './molecules/Pokedex';
import Pokeinformation from './molecules/Pokeinformation';
import Header from './shared/Header';

function App() {

    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />

                {/*paso 8.1 ruta protegida */}
                <Route element={<ProtecteRoutes />}>
                    {/*8.2 rutas anidades que renderiza las rutas hijas = outlet // el path es donde va a ir la ruta de la pagina */}
                    <Route path='/pokedex' element={<Pokedex />} />
                    <Route path='/pokedex/:id' element={<Pokeinformation />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
