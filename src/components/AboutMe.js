import Headshot from '../app/images/IMG_5246.jpg';
import { Row, Col } from 'reactstrap';

const AboutMe = () => {
    return (
        <Row className='sub-section' id='about-me' >
            <Col className='information col-xs-12'>
                <h2>About Me</h2>
                <p>I'm Kris Hvattum. I am a front-end web developer with a background in education. I am always in the process of learning something new. The last couple years I have honed in on programming and found that there is something new to learn <em>every day</em> in this field! I thrive on challenges and the knowledge that something I built delighted a user.</p>
            </Col>
            <Col className='headshot-container'>
                <img src={Headshot} class='headshot' alt='Kris hvattum Headshot' />
            </Col>
        </Row>

    )
}

export default AboutMe;