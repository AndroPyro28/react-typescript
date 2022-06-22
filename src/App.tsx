import React, { useEffect, useState } from "react";
import "./App.css";
import Greet from "./components/Greet";

function App() {
  const [name, setName] = useState({
    firstname:'',
    lastname: ''
  });
  
  const [messageCount, setMessageCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      setName({firstname: 'andro', lastname: 'eugenio'});
      setMessageCount(10);
      setIsLoggedIn(true);
    } else {
      setName({firstname: '', lastname: ''});
      setMessageCount(-1);
      setIsLoggedIn(false);
    }
  };


  return (
    <div className="App">
      <Greet name={name} messageCount={messageCount} isLoggedIn={isLoggedIn} />
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default App;
