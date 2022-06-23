import React, { useEffect, useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

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

      {/* passing props and optional props*/}
      <Greet name={name} messageCount={messageCount} isLoggedIn={isLoggedIn} />
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>

      {/* union props */}
      <Status status="loading" />

      {/* text children props */}
      <Heading>Placeholder text yes</Heading>

      {/* react component children props */}
      <Oscar> <Heading>Oscar goes to leonardo dicaprio</Heading> </Oscar>
      
    </div>
  );
}

export default App;
