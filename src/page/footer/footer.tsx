import './footer.css'
import ig from '/img/instagram.png'
import lIn from '/img/linkedin.png'
import git from '/img/github.png'
export default function Footer(){
    return(
        <footer className='footer'>
            <div className="connect">
                <p>Let's connect!</p>
                <div className="footer-socials">
                    <a href="#" target="_blanck"><img src={ig} alt="instagram logo" /></a>
                    <a href="https://www.linkedin.com/in/omar-sosa-b5949a247" target="_blanck"><img src={lIn} alt="LinkedIn logo" /></a>
                    <a href="https://github.com/SirZosa" target="_blanck"><img src={git} alt="Github logo" /></a>
                </div>
            </div>
            <p className='copyright'>Copyright &copy; Omar Sosa 2024</p>
        </footer>
    )
}