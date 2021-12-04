import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
