import Home from './Components/Pages/Home';
import Player from './Components/Player';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './app.css'
import Test from './Components/test';
function App() {
  return (
    <div className="App">
      {/* <Player/> */}
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/watch' element={<Player />}/>
        <Route path='/test' element={<Test />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
