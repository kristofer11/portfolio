import BHPhoto from '../app/images/Screenshot 2023-02-28 at 7.10.53 PM.jpeg';
import KardiaPhoto from '../app/images/kardiaScreenshot9.6.23.png';
import CountryGuesser from '../app/images/countryGuesserScreenshot.png';
import CountyGuesser from '../app/images/CountiesScreenshot.png'
import MyLibrary from '../app/images/Screenshot 2023-07-14 at 2.12.53 PM.png'
import WeatherApp from '../app/images/weather-app.png';
import Kelsos from '../app/images/Screenshot 2023-08-18 at 7.56.52 PM.png';
import Chuck from '../app/images/chuckSiteScreenshot.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
    })
    const [ref2, inView2] = useInView({
        triggerOnce: true,
    })
    const [ref3, inView3] = useInView({
        triggerOnce: true,
    })
    const [ref4, inView4] = useInView({
        triggerOnce: true,
    })
    const [ref5, inView5] = useInView({
        triggerOnce: true,
    })
    const [ref6, inView6] = useInView({
        triggerOnce: true,
    })
    const [ref7, inView7] = useInView({
        triggerOnce: true,
    })
    const [ref8, inView8] = useInView({
        triggerOnce: true,
    })

    return (
        <div className='sub-section-alternative' id='projects' >
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref1}
            >
                <h2 className='project-title'>Projects</h2>
            </motion.div>            <motion.div
                initial={{ opacity: 0 }}
                animate={inView8 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref8}
            >
                <h3><em>Click a project to view it live</em></h3>
            </motion.div>

            <div className='project-container'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref2}
                >
                    <a className='project-link' href='https://kardiaclassical.org' target='_blank' >
                        <div className='project-card'>
                            <h3 className='project-card-title'>Private School Website</h3>
                            <img className='project-image' src={KardiaPhoto} alt='Kardia Classical School project screenshot' />
                            <p className='subtext'>Website built using ReactJS for Kardia Classical Scool</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref3}
                >
                    <a className='project-link' href='https://kelsosmeats.com' target='_blank' >
                        <div className='project-card'>
                            <h3 className='project-card-title'>Butcher Shop Landing Page</h3>
                            <img className='project-image' src={Kelsos} alt='Screenshot of butcher shop landing page' />
                            <p className='subtext'>Landing page/marketing site for butcher shop in Snohomish, WA</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView4 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref4}
                >
                    <a className='project-link' href='https://whitfieldforeducation.com' target='_blank' >
                        <div className='project-card'>
                            <h3 className='project-card-title'>Political Campaign Site</h3>
                            <img className='project-image' src={Chuck} alt='Chuck Whitfield for School board site screenshot' />
                            <p className='subtext'>Campaign website built for school board candidate</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView5 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref5}
                >
                    <a className='project-link' href='https://brittanyherzog.com' target='_blank' >
                        <div className='project-card'>
                            <h3 className='project-card-title'>Photography Website</h3>
                            <img className='project-image' src={BHPhoto} alt='BH Photography project screenshot' />
                            <p className='subtext'>Photography portfolio website built using ReactJS.</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView6 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref6}
                >
                    <a className='project-link' href='https://library-manager-gamma.vercel.app/' target='_blank' >
                        <div className='project-card'>
                            <h3 className='project-card-title'>Personal Library Manager</h3>
                            <img className='project-image' src={MyLibrary} alt='Kardia Classical School project screenshot' />
                            <p className='subtext'>*IN PROGRESS* user can to track, rate and (eventually) share what they are reading</p>
                        </div>
                    </a>
                </motion.div>
                <a className='project-link' href='https://kristofer11.github.io/country-guesser' target='_blank' >
                    <div className='project-card'>
                        <h3 className='project-card-title'>Country Guessing Game</h3>
                        <img className='project-image' src={CountryGuesser} alt='Screenshot of country guessing game website' />
                        <p className='subtext'>Educational game that uses the REST Countries API</p>
                    </div>
                </a>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView7 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref7}
                >
                    <a className='project-link' href='https://kristofer11.github.io/county-guesser/' target='_blank' >
                        <div className='project-card'>
                            <h3 className='project-card-title'>WA State Counties Game</h3>
                            <img className='project-image' src={CountyGuesser} alt='Screenshot of county guessing game website' />
                            <p className='subtext'>Geography game built to help my students with counties</p>
                        </div>
                    </a>
                </motion.div>

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