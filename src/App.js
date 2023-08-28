
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/NavBar/Navbar';
import Cart from './component/Cart/Cart';
import LoginPage from './component/Login/Login';
import Signup from './component/Login/Signup';
import { Routes, Route } from 'react-router-dom';
import { useStateValue } from './component/ContextApi/ContextApi';
function App() {

  const [{login}, dispatch] = useStateValue()
  return (
    
    <>
      
      
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={<>{login?(<><Navbar/>
        <Home/></>):(<><LoginPage/></>)}</>}  />
          
        
        <Route path='/cart' element={<><Navbar/><Cart/></>}/>

      </Routes>
    </>
    
  );
}

export default App;
// const firebaseConfig = {
//   apiKey: "AIzaSyDV81Cfp2-YZoonMFsDv2T4m4GhoCzLwTk",
//   authDomain: "clone-ced88.firebaseapp.com",
//   projectId: "clone-ced88",
//   storageBucket: "clone-ced88.appspot.com",
//   messagingSenderId: "592489253317",
//   appId: "1:592489253317:web:8122ecb9006fe1fb5163ac",
//   measurementId: "G-1WSLN58Z41"
// };