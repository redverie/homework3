import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successfulLogin, setLoggedIn] = useState(false);
  const [appState, setAppState] = useState('login')

  const loginLogic = () => {
  if (username === 'Ash' && password === 'Charizard'){
    setLoggedIn(true);
    setUsername('');
    setPassword('');
    return
  } else {
      setAppState('failedLogin');
    }
  };

      const Logout = () => {
      setLoggedIn(false);
      setAppState("login");
    };

    const backToLogin = () => {
      setAppState('login');
      setUsername('');
      setPassword('');
    };

  return (
    <div className="App">
      <h1>Login page</h1>
      <div className="Login">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button onClick={loginLogic}>Login</button>
      </div>
    </div>
  );
}

export default App;
 

      //     if I had more time, I would have tried adding a switch statement like this one with all the different cases
      // // switch (appState){
      // //   case 'loginSuccessful':
      // //     return(
      // //       <div> <h1> Success! You are logged in </h1></div>
      // //       <button onClick={Logout}>Log out</button>
      // //     )
      // // }



//log in first page 

//set logic for password 
// if right, go to DIFFERENT PAGE (wuth logout option)
// if no match , trigger error page