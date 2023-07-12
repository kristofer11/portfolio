import Header from '../components/Header'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Technologies />
            <AboutMe/>
            <Projects />
        </div>
    )
}

export default Home;