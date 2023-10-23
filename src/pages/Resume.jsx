import ResumeImg from '../app/images/Kris_Hvattum_Resume.png'
import Header from '../components/Header'

const Resume = () => {
    return (
        <>
            <Header />
            <div className="resume-container">
                <img src={ResumeImg} />
            </div>
        </>

    )
}

export default Resume