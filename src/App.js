import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MobileDetails from './components/MobileDetails';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/phones/:id' element={<MobileDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
