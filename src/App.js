
import './App.css';
import Home from './component/Home';
import Navbar from './component/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="app">
      <Navbar/>
      
      <Routes>
        <Route path='' element={<h1>Amazon</h1>} />
        <Route path='/home' element={<Home/>}/>

      </Routes>
    </div>
    
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