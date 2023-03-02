import BHPhoto from '../app/images/Screenshot 2023-02-28 at 7.10.53 PM.jpeg';
import KardiaPhoto from '../app/images/kardiascreenshot.png';

const Projects = () => {
    return (
        <div className='sub-section-alternative' id='projects' >
            <h2 className='project-title'>Projects</h2>
            <div className='project-container'>
                <div className='project-card'>
                    <img className='project-image' src={BHPhoto} alt='BH Photography project screenshot' />
                    <h3 className='project-card-title'>Photography Website</h3>
                    <p className='subtext'>Photography portfolio website built using ReactJS.</p>
                    <hr />
                    <p className='subtext'><a className='project-link' href='https://kristofer11.github.io/bhphotography-react' target='_blank' >View Here</a></p>
                </div>
                <div className='project-card'>
                    <img className='project-image' src={KardiaPhoto} alt='Kardia Classical School project screenshot' />
                    <h3 className='project-card-title'>Private School Website</h3>
                    <p className='subtext'>A website built using ReactJS for Kardia Classical Scool (in progress)</p>
                    <hr />
                    <p className='subtext'><a className='project-link' href='https://github.com/kristofer11/kardia' target='_blank' >View Here</a></p>
                </div>
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