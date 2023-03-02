import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <HashRouter>
            <Hero />
            <AboutMe />
            <Projects />
            <Footer />            
        </HashRouter>
    </div>
  );
}

export default App;
