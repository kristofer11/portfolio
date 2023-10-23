import headshot from '../app/images/IMG_5246.jpg';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'reactstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
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
        <div className='sub-section' id='about-me'  >
            <div className='information col-xs-12'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView1 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref1}
                >
                    <h2>About Me</h2>
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={inView2 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref2}
            >
                <h3>Hi there! I'm Kris, a web developer based in the beautiful Seattle area. </h3>
                </motion.div>
                {/* <p>I should be <strong>up front</strong> about a few things:</p> */}
                <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView3 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            ref={ref3}
                        >
                <p>Let me give you a little glimpse into <strong>what makes me tick:</strong></p>
                </motion.div>

                <ul>
                <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView4 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            ref={ref4}
                        >
                    <li>
                        First off, I have a naturally <strong><em>creative </em></strong>brain. It's just the way I'm wired. Imagine my UI styling process as a culinary adventure – I love to experiment, and if it doesn't taste right (or look good in this case), I'm not afraid to start over!
                    </li>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView5 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref5}
                >
                    <li>
                        I specialize in <strong><em>front-end web development</em></strong> and am steadily expanding my skill set to become a full-stack engineer. Right now, I'm having a blast working with ReactJS, NextJS, Sass, MongoDB, and ExpressJS on various projects, including a <strong><a className='about-link' href='https://github.com/kristofer11/library-manager' target="_blank">personal library management app</a></strong>.</li>
                        </motion.div>
                        <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView6 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref6}
                >
                    <li>
                        I am also building a REST api for my Country Guesser app using <em>Express, MongoDB, and Mongoose. </em>Check out my <strong>
                            <HashLink to='#projects'>
                                <a className='about-link' >projects</a>
                            </HashLink>
                        </strong> below to see  my work in action!
                    </li>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView7 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref7}
                >
                    <li>
                        Beyond my tech journey, I bring a <strong><em>diverse professional background</em></strong> to the table. I've worn many hats, from teaching and special needs education to school administration and corrections. These experiences have shaped me and instilled a passion for <strong><em>creating, leading, </em></strong>and <strong><em>teaching</em></strong> in everything I do.
                    </li>
                    </motion.div>
                </ul>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView8 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref8}
                >
                <h3><em>Wow</em>, thanks for reading this far! Below you will find my current projects and a couple different ways you can reach me.</h3>
                </motion.div>
            </div>
            {/* <Col className='headshot-container'>
                <img src={headshot} className='headshot' alt='Kris hvattum Headshot' />
            </Col> */}
        </div>

    )
}

export default AboutMe;