import React, { useEffect, useState } from 'react';
import './App.css';
import Greet from './components/Greet';

function App() {
  const [name, setName] = useState("")

  useEffect(() => {
    setName('Andro Eugenio');
  },[]);

  return (
    <div className="App">
      <Greet name={name} />
    </div>
  );
}

export default App;
