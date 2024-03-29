import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button,
    Row,
    Col
} from 'reactstrap';
import Logo from '../app/images/logo-white-nobg.png';
import { HashLink } from 'react-router-hash-link';
import headshot from '../app/images/IMG_5246.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
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
    
    // const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='hero'>
            <div className='hero-area'>

                <div className='hero-text'>
                    <Col className='headshot-container'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView1 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            ref={ref1}
                        >
                            <img src={headshot} className='headshot' alt='Kris hvattum Headshot' />
                        </motion.div>
                    </Col>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView1 ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        ref={ref1}
                    >
                        <h1 className='title'>Kris Hvattum</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView1 ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        ref={ref1}
                    >
                        <p className='subtitle'>Web Developer</p>
                    </motion.div>
                    <div className='hero-link-container'>
                        <HashLink id='button' to='#about-me'>
                            <Button id='button-text'>About me</Button>
                        </HashLink>
                        <HashLink id='button' to='/resume'>
                            <Button id='button-text'>Resume</Button>
                        </HashLink>
                    </div>

                </div>
                <div className='socials'>
                <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView2 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            ref={ref2}
                        >
                    <div className='social'>
                        <a href='https://github.com/kristofer11' target='_blank'>
                            <svg className='social-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                    </motion.div>
                    <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView3 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                            ref={ref3}
                        >
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/kris-hvattum-bbabb6183/' target='_blank'>
                            <svg className='social-svg' xmlns="http://www.w3.org/2000/svg" fill='#eac67a' viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                        </a>
                    </div>
                    </motion.div>
                    <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView4 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1.25 }}
                            ref={ref4}
                        >
                    <div className='social' >
                        <a href='https://twitter.com/HvattumKris' target='_blank'>
                            <svg className='social-svg' xmlns="http://www.w3.org/2000/svg" fill='#eac67a' viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero;