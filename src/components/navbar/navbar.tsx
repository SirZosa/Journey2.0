import { useState } from "react"
import Burger from "../burger-icon/burger"
import ProfilePic from "../profilepic/profilepic"
import fb from '../../assets/Facebook.png'
import ig from '../../assets/Instagram.png'
import tw from '../../assets/Twitter.png'
import yo from '/img/yo.jpg'
import "./navbar.css"
export default function Navbar(){
    const [open, setOpen] = useState<boolean>(false);
    function onClickProp(){
        setOpen(prev => !prev);
    }
    return(
        <>
        <nav>
            <div className="nav">
                <a href="#main" className="nav-logo">
                    <ProfilePic src={yo} size="xs"/>    
                    <p>Omar Sosa</p>
                </a>
                <div className="nav-links">
                    <a href="#main">HOME</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#about">ABOUT ME</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className="burger-icon">
                    <Burger arial-label="open-close" onClickProp={onClickProp} open={open}/>
                </div>
            </div>
            <div className={`nav-container ${open ? 'open' : 'close'}`}>
                <div className="nav-container-links">
                    <a onClick={()=> setOpen(false)} href="#main">HOME</a>
                    <a onClick={()=> setOpen(false)} href="#projects">PROJECTS</a>
                    <a onClick={()=> setOpen(false)} href="#about">ABOUT</a>
                    <a onClick={()=> setOpen(false)} href="#contact">CONTACT</a>
                </div>
                <div className="nav-socials">
                    <a href="#"><img src={ig} alt="instagram logo" /></a>
                    <a href="#"><img src={fb} alt="facebook logo" /></a>
                    <a href="#"><img src={tw} alt="twitter logo" /></a>
                </div>
            </div>
        </nav>
        </>
    )
}