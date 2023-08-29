import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/ContextApi';

import './style.css';

function Signup() {
    const [{user}, dispatch] = useStateValue()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if(name && email && password){
    dispatch({
        type:"User",
        item:{
            name:name,
            email:email,
            password:password
        }
    })
    setEmail('')
    setPassword('')
    setName('')
    
   }
   else{alert("Enter credentials")
   }
    console.log("clicked");
  };

  return (
    <div className="Main">
        <img className='amazonLogo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt="" />
        <div className="login-container">
      <h2 style={{textAlign:'center'}}>Login</h2>
      <form >
        <div className="form-group">
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
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
        <Link ><button onClick={handleSubmit} className='signinbtn'>Sign up</button></Link>
      </form>
      <p className='newuser' style={{textAlign:'center'}}><hr /><span>Already have an account ?</span><hr /></p>
      <Link to='/' ><button className="signup">Signin</button></Link>
    </div>
    
    </div>
  );
}

export default Signup;
