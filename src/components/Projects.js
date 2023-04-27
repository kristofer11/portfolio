import BHPhoto from '../app/images/Screenshot 2023-02-28 at 7.10.53 PM.jpeg';
import KardiaPhoto from '../app/images/kardia-3-18.png';
import CountryGuesser from '../app/images/country-guesser.png'

const Projects = () => {
    return (
        <div className='sub-section-alternative' id='projects' >
            <h2 className='project-title'>Projects</h2>

            <div className='project-container'>
                <a className='project-link' href='https://brittanyherzog.com' target='_blank' >
                    <div className='project-card'>
                        <img className='project-image' src={BHPhoto} alt='BH Photography project screenshot' />
                        <h3 className='project-card-title'>Photography Website</h3>
                        <p className='subtext'>Photography portfolio website built using ReactJS.</p>

                    </div>
                </a>
                <a className='project-link' href='https://kardiaclassical.org' target='_blank' >
                    <div className='project-card'>

                        <img className='project-image' src={KardiaPhoto} alt='Kardia Classical School project screenshot' />

                        <h3 className='project-card-title'>Private School Website</h3>
                        <p className='subtext'>Website built using ReactJS for Kardia Classical Scool</p>
                    </div>
                </a>
                <a className='project-link' href='https://kristofer11.github.io/country-guesser' target='_blank' >
                    <div className='project-card'>

                        <img className='project-image' src={CountryGuesser} alt='Screenshot of country guessing game website' />

                        <h3 className='project-card-title'>Country Guessing Game</h3>
                        <p className='subtext'>Simple educational game that uses the REST Countries API</p>
                    </div>
                </a>
                {/* <div className='project-card'>
                    <img className='project-image' src={BHPhoto} alt='BH Photography project screenshot' />
                    <h3 className='project-card-title'>Photography Website</h3>
                    <p className='subtext'>A portfolio to display the work of photographer Brittany Herzog.</p>
                    <hr />
                    <p className='subtext'><a className='project-link' href='https://kristofer11.github.io/bhphotography-react' target='_blank' >View Here</a></p>
                </div> */}
            </div>
        </div>
    )
}

export default Projects;