import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchpage from './Component/SearchPage';
import Home from "./Pages/Home";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/search' element={<Searchpage />}/>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
