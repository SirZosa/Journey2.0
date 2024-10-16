import './about.css'
import GlowingHeader from '../../components/glowing-header/glowingheader'
import Badge from '../../components/badge/badge'
import FadeIn from '../../components/fadein/fadein'

export default function About(){

    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React JS', 'Java', 'Node Js', 'Express Js', 'MySQL']
    const htmlSkills = skills.map(skill => {
        return (
            <Badge attr={skill}>{skill}</Badge>
        )
    })
    return(
        <section id='about' className='about'>
            <FadeIn>
                <GlowingHeader>ABOUT</GlowingHeader>
            </FadeIn>
            <FadeIn>
                <p className='about-me'>Hi, I'm Omar, a passionate front-end developer dedicated to crafting innovative and user-friendly applications that tackle real-world challenges. With a strong foundation in computer science and electrical engineering, I've honed my skills in React JS, CSS, Styled Components, and other cutting-edge technologies.</p> 
            </FadeIn>
            <FadeIn>
                <p className='about-me'>As a lifelong learner, I'm currently pursuing my Master's degree in Computer Science to stay ahead of the curve and tackle complex problems. My expertise spans multiple programming languages, including JavaScript, TypeScript, Java, and Node JS, as well as UX/UI prototyping and database management with MySQL.</p>
            </FadeIn>
            <FadeIn>
                <p className='about-me'>I possess a strong proficiency in front-end and back-end development using React JS and Node JS, enabling me to build dynamic and responsive applications.</p>
            </FadeIn>
            <FadeIn>
                <p className='about-me'>When I'm not coding, you can find me exploring new technologies or collaborating with fellow developers. As a native Spanish speaker and fluent English speaker, I'm well-equipped to work with diverse teams and clients.</p>
            </FadeIn>
            <FadeIn>
                <div className="info">
                    <div className="info-skills">
                        <h3>My skills:</h3>
                        <div className="info-skills-container">
                            {htmlSkills}
                        </div>
                    </div>
                    <div className="contact-information">
                        <h3 id='contact'>CONTACT</h3>
                        <span>
                            Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at <a href="mailto:omar.sosa.quimica@gmail.com">omar.sosa.quimica@gmail.com</a> or call me directly at +1(915)-701-6412
                        </span>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}