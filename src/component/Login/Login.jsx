import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/ContextApi';

import './style.css';

function LoginPage() {
  const [{user, login}, dispatch] = useStateValue()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
     
     let arr=user.filter((item)=>item.password===password && item.name=== name)
      
    if(arr.length>0){
      dispatch({
        type:"Auth"
      })
    }
    else{
      alert("invailid user");
    }
  };

  return (
    <div className="Main">
        <img className='amazonLogo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="" />
        <div className="login-container">
      <h2 style={{textAlign:'center'}}>Login</h2>
      <form >
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Link  ><button onClick={handleSubmit} className='signinbtn' >Sign In</button></Link>
      </form>
      <p className='newuser' style={{textAlign:'center'}}><hr/><span>New to Amazon ?</span><hr /></p>
      <Link to='/signup'><button className="signup">I am new customer</button></Link>
    </div>
    
    </div>
  );
}

export default LoginPage;
