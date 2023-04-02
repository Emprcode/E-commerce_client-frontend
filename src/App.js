import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MenTops from './pages/MenTops';
import MenBottoms from './pages/MenBottoms';
import MenFootwares from './pages/MenFootwares';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* public Route */}

        <Route path='/' element={<HomePage/>}/>
        <Route path='/mentops' element={<MenTops/>}/>
        <Route path='/menbottoms' element={<MenBottoms/>}/>
        <Route path='/menfootwares' element={<MenFootwares/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
