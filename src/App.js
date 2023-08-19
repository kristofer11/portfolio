import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Technologies from './components/Technologies';
import Header from './components/Header';
import Home from './pages/Home';
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resume' element={<Resume />} />                   
            </Routes>            
        <Footer /> 
        <p style={{background: 'black', margin: 0, color: '#408697', paddingLeft: '1.5rem'}}>Kris Hvattum ©2023</p>
    </div>
  );
}

export default App;
