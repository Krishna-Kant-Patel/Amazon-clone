
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/NavBar/Navbar';
import Cart from './component/Cart/Cart';
import LoginPage from './component/Login/Login';
import Signup from './component/Login/Signup';
import { Routes, Route } from 'react-router-dom';
import { useStateValue } from './component/ContextApi/ContextApi';
import SearchProducts from './component/SearchData/SearchProducts';
function App() {

  const [{login}, dispatch] = useStateValue()
  return (
    
    <>
      
      
      <Routes>
      <Route exact path='/' element={<>{login?(<><Navbar/><Home/></>):(<><LoginPage/></>)}</>}  />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cart' element={<><Navbar/><Cart/></>}/>
        <Route path='/search' element={<><Navbar/><SearchProducts/></>}/>

      </Routes>
    </>
    
  );
}

export default App;
