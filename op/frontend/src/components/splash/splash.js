import React from "react";
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  
  render() {
    
    
    let logIn = (
      <Link to={'/login/'}>log in</Link>
    );
    let signUp = (
      <Link to={'/signup/'}>Sign up</Link>
    );
    return (
      <div className="authDiv">
      Welcome to Op., the social art production platform. {signUp} to get started or {logIn} if you already have an account.
      </div>
    );
  }
}

export default Splash;
