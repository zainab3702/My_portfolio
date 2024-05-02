import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
<div className="bg-gradient-to-r from-black via-yellow-500 to-black ">
    <Navbar/>
      <div>
        <Home />
      </div>

    </div>  );
}

export default App;
