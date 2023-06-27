import headshot from '../app/images/IMG_5246.jpg';

const AboutMe = () => {
    return (
        <div className='sub-section' id='about-me' >
            <div className='information col-xs-12'>
                <h2>About Me</h2>
                <h3>Hi, I'm Kris, a web developer from the Seattle area.</h3>
                <p>I should be <strong>up front</strong> about a few things:</p>
                <ul>
                    <li>
                        I have a <strong><em>creative</em> </strong>brain, there's no way around it. <em>Sometimes</em> I style UIs the way I cook - try it out and throw it away if it's gross!
                    </li>
                    <li>
                        I have proven skills in <em><strong>front-end web development</strong></em> and I am progressively adding the skills it takes to be a full-stack engineer. Currently I am having a blast using ReactJS, NextJS, Sass, MongoDB and ExpressJS to complete some projects including a <strong><a  className='about-link' href='https://github.com/kristofer11/library-manager' target="_blank">personal library management app</a></strong>.
                    </li>
                    <li>
                        I am also building a REST api for my Country Guesser app using <em>Express, MongoDB, and Mongoose. </em>Check out my <strong><a className='about-link' href='#projects' target="_blank">projects</a></strong> below to see  my work!
                    </li>
                    <li>
                        I have a <strong><em>varied professional background</em></strong> that includes teaching, special needs education, school administration, and corrections. I bring these experiences with me wherever I go and they contribute to my desire to <em><strong>create</strong></em>, <strong><em>lead</em></strong>, and <strong><em>teach</em></strong> wherever I go.
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