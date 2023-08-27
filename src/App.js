
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <>
      <Navbar/> 
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<h1>krishna</h1>}/>

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