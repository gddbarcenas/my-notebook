import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import { 
  BrowserRouter as Router, Routes, 
  Route 
} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
