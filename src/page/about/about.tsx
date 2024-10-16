import './about.css'
import GlowingHeader from '../../components/glowing-header/glowingheader'
import FadeIn from '../../components/fadein/fadein'

export default function About(){
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
        </section>
    )
}