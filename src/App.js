import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MenTops from './pages/MenTops';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* public Route */}

        <Route path='/' element={<HomePage/>}/>
        <Route path='/mentops' element={<MenTops/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
