import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Navbarr';
import Home from './Views/Home';
import Pokemon from './Views/Pokemon';
import DPokemon from './Views/DetallePokemon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarr></Navbarr>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/Pokemon' element={<Pokemon></Pokemon>}>
          </Route>
          <Route path='/Pokemon/:Id' element={<DPokemon></DPokemon>}>
          </Route>
          <Route path='*' element={<div>Error!!</div>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
