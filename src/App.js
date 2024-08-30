import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
// import Layout from './Components/Layout';

function App() {
  // console.log(history);
  // const getColor = (curr) => {
  //   if(history.location.pathname === curr)
  //   return "bg-yellow-500 w-[60px] h-[3px] w-0 group-hover:w-full transition-all duration-500"
  //   }
    return (
    <Router>
     <div>
     <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/projects" element={<Projects/>}/>
        <Route  path="/skills" element={<Skills/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        {/* <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Routes>
     </div>
    </Router>
  )
}

export default App;
