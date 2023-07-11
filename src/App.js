import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Hero />
            <Technologies />
            <AboutMe />
            <Projects />
            <Footer />            
        </HashRouter>
    </div>
  );
}

export default App;
