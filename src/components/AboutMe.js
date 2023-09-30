import headshot from '../app/images/IMG_5246.jpg';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'reactstrap';

const AboutMe = () => {
    return (
        <div className='sub-section' id='about-me'  >
            <div className='information col-xs-12'>
                <h2>About Me</h2>
                <h3>Hi there! I'm Kris, a web developer based in the beautiful Seattle area. </h3>
                {/* <p>I should be <strong>up front</strong> about a few things:</p> */}
                <p>Let me give you a little glimpse into <strong>what makes me tick:</strong></p>

                <ul>
                    <li>
                        First off, I have a naturally <strong><em>creative </em></strong>brain. It's just the way I'm wired. Imagine my UI styling process as a culinary adventure – I love to experiment, and if it doesn't taste right (or look good in this case), I'm not afraid to start over!
                    </li>
                    <li>
                        I specialize in <strong><em>front-end web development</em></strong> and am steadily expanding my skill set to become a full-stack engineer. Right now, I'm having a blast working with ReactJS, NextJS, Sass, MongoDB, and ExpressJS on various projects, including a <strong><a className='about-link' href='https://github.com/kristofer11/library-manager' target="_blank">personal library management app</a></strong>.</li>
                    <li>
                        I am also building a REST api for my Country Guesser app using <em>Express, MongoDB, and Mongoose. </em>Check out my <strong>
                            <HashLink to='#projects'>
                                <a className='about-link' >projects</a>
                            </HashLink>
                        </strong> below to see  my work in action!
                    </li>
                    <li>
                        Beyond my tech journey, I bring a <strong><em>diverse professional background</em></strong> to the table. I've worn many hats, from teaching and special needs education to school administration and corrections. These experiences have shaped me and instilled a passion for <strong><em>creating, leading, </em></strong>and <strong><em>teaching</em></strong> in everything I do.
                    </li>
                </ul>
                <h3><em>Wow</em>, thanks for reading this far! Below you will find my current projects and a couple different ways you can reach me.</h3>
            </div>
            {/* <Col className='headshot-container'>
                <img src={headshot} className='headshot' alt='Kris hvattum Headshot' />
            </Col> */}
        </div>

    )
}

export default AboutMe;