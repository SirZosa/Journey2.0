import './projects.css' 
import GlowingHeader from '../../components/glowing-header/glowingheader'
import ImportantCard from '../../components/importantcard/importantcard'
import Card from '../../components/card/card'
import commerce from '/img/omars-ecommerce.webp'
import quiz from '/img/quizzical.webp'
import typeing from '/img/typegame.webp'
import { posts } from '../../data'
import GlassCard from '../../components/glass-card/glasscard'
export default function Projects(){

    const htmlProjects = posts.map(project =>{
        const {date, title, message, img, alt, link, codeLink} = project
        return (
            <div className="projects-padding">
                <GlassCard key={crypto.randomUUID()}>
                    <Card date={date} title={title} message={message} img={img} alt={alt} link={link} codeLink={codeLink}/>
                </GlassCard>        
            </div>
        )
    })
    return (
        <section id='projects' className="projects">
            <GlowingHeader>PROJECTS</GlowingHeader>
            <div className="important-projects">
                <GlassCard>
                    <ImportantCard src={commerce} liveUrl='https://omars-commerce.netlify.app/' codeUrl='https://github.com/SirZosa/EcommerceAPI' title='Ecommerce' skills={['HTML', 'CSS', 'JS', 'React', 'Node Js', 'Express Js', 'MySQL']}>A very complete E-commerce app that allows users to create and modify their profiles, add items to their shopping carts and see their complete orders at the end. Used many technologies in order to achieve this web app. Used the MVC architecture for this project.</ImportantCard>
                </GlassCard>        
                <GlassCard>
                    <ImportantCard src={quiz} liveUrl='https://omars-quizicalv2.netlify.app/' codeUrl='https://github.com/SirZosa/quizicalV2' title='QUIZZICAL' skills={['HTML', 'CSS', 'JS', 'React', 'TS']}>A trivia web site built using React for the ease of using componets to build a web site. The web site offers different options to the users and once the user finish the setup the app uses an api that returns questions and the page let the user to interact with those questions trying to select the rigth answer.</ImportantCard>
                </GlassCard>
                <GlassCard>
                    <ImportantCard src={typeing} liveUrl='https://omars-typing-game.netlify.app/' codeUrl='https://github.com/SirZosa/TypeGame' title='Typing game' skills={['HTML', 'CSS', 'JS', 'React', 'TS']}>A simple game to test user's typing speed and accuracy. Uses and API to get the words and throug code I separate into letters and compare each letter with the user's input. Currently just optimized for desktop computers.</ImportantCard>
                </GlassCard>        
            </div>

                <h4>ALL PROJECTS</h4>
            
            <div className="other-projects">
                {htmlProjects}
            </div>
        </section>
    )
}