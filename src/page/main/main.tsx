import './main.css'
import ProfilePic from '../../components/profilepic/profilepic'
import GlassCard from '../../components/glass-card/glasscard'
import yo from "/img/yo.jpg"
export default function Main(){
    return(
                <section id='main' className="main">
            <GlassCard>
                    <div className="main-container">
                        <ProfilePic src={yo} size='xl'/>
                        <div className="description">
                            <h2>Omar Sosa</h2>
                            <h1>Front-End Developer</h1>
                            <p>I'm a front-end developer. I love building apps that solve real-world problems, and that
                            are delightful to use. My specialties include, React JS, CSS and Styled Components.
                            Currently pursuing a Master's degree to be more prepared for real world challenges.</p>
                        </div>
                    </div>
            </GlassCard>
                </section>
    )
}