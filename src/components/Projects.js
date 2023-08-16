import BHPhoto from '../app/images/Screenshot 2023-02-28 at 7.10.53 PM.jpeg';
import KardiaPhoto from '../app/images/kardia-3-18.png';
import CountryGuesser from '../app/images/country-guesser.png';
import MyLibrary from '../app/images/Screenshot 2023-07-14 at 2.12.53 PM.png'
import WeatherApp from '../app/images/weather-app.png';

const Projects = () => {
    return (
        <div className='sub-section-alternative' id='projects' >
            <h2 className='project-title'>Projects</h2>

            <div className='project-container'>
                <a className='project-link' href='https://brittanyherzog.com' target='_blank' >
                    <div className='project-card'>
                        <h3 className='project-card-title'>Photography Website</h3>
                        <img className='project-image' src={BHPhoto} alt='BH Photography project screenshot' />
                        <p className='subtext'>Photography portfolio website built using ReactJS.</p>
                    </div>
                </a>
                <a className='project-link' href='https://kardiaclassical.org' target='_blank' >
                    <div className='project-card'>
                        <h3 className='project-card-title'>Private School Website</h3>
                        <img className='project-image' src={KardiaPhoto} alt='Kardia Classical School project screenshot' />
                        <p className='subtext'>Website built using ReactJS for Kardia Classical Scool</p>
                    </div>
                </a>
                <a className='project-link' href='https://library-manager-gamma.vercel.app/' target='_blank' >
                    <div className='project-card'>
                        <h3 className='project-card-title'>Personal Library Manager</h3>
                        <img className='project-image' src={MyLibrary} alt='Kardia Classical School project screenshot' />
                        <p className='subtext'>*IN PROGRESS* user can to track, rate and (eventually) share what they are reading</p>
                    </div>
                </a>
                <a className='project-link' href='https://kristofer11.github.io/country-guesser' target='_blank' >
                    <div className='project-card'>
                        <h3 className='project-card-title'>Country Guessing Game</h3>
                        <img className='project-image' src={CountryGuesser} alt='Screenshot of country guessing game website' />
                        <p className='subtext'>Simple educational game that uses the REST Countries API</p>
                    </div>
                </a>
               
{/* REMOVE UNTIL I CAN MAKE MORE PROGRESS */}
                {/* <a className='project-link' href='https://kristofer11.github.io/weather-app' target='_blank' >
                    <div className='project-card'>
                        <h3 className='project-card-title'>Weather forecast app.</h3>
                        <img className='project-image' src={WeatherApp} alt='Screenshot of country guessing game website' />
                        <p className='subtext'>Started as a code-along, now I am progressively adding features like changing background.</p>
                    </div>
                </a> */}
            </div>
        </div>
    )
}

export default Projects;