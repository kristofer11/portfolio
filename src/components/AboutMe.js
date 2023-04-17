import headshot from '../app/images/IMG_5246.jpg';
import { Row, Col } from 'reactstrap';

const AboutMe = () => {
    return (
        <Row className='sub-section' id='about-me' >
            <Col className='information col-xs-12'>
                <h2>About Me</h2>
                <h3>Hi, I'm Kris, a web developer from the Seattle area.</h3>
                <p>I should be <strong>up front</strong> about a few things:</p>
                <ul>
                    <li>I have a <strong><em>creative</em> </strong>brain, there's no way around it. <em>Sometimes</em> I code the way I cook - try it out and throw it away if it's gross!</li>
                    <li>I have proven skills in <em><strong>front-end web development</strong></em> and I am progressively adding the skills it takes to be a full-stack engineer. Currently I am having a blast using ReactJS and Sass to complete some projects including a <strong><a href='https://kardiaclassical.org'>site I built for a local private school</a></strong>. Check out my <strong><a href='#projects'>projects</a></strong> below to see some of my work!</li>
                    <li>I have a <strong><em>varied professional background</em></strong> that includes teaching, special needs education, school administration, and corrections. I bring these experiences with me wherever I go and they contribute to my desire to <em><strong>create</strong></em>, <strong><em>lead</em></strong>, and <strong><em>teach</em></strong> wherever I go.
                    </li>
                </ul>
                <h3>If you have read this far and want to learn more, below are my current projects and some ways you can get ahold of me.</h3>
            </Col>
            <Col className='headshot-container'>
                <img src={headshot} className='headshot' alt='Kris hvattum Headshot' />
            </Col>
        </Row>

    )
}

export default AboutMe;