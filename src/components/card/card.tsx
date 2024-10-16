import './card.css'
import ButtonLink from '../button-links/buttonlink'

type Props = {
    date:string;
    title:string;
    message:string;
    img:string;
    alt:string;
    link:string;
    codeLink:string;
}
export default function Card({date, title, message, img, alt, link, codeLink}:Props){
    return(
        <div className="card">
            <img src={img} alt={alt}/>
            <p className='date'>{date}</p>
            <p className='title'>{title}</p>
            <p className='message'>{message}</p>
            <div className="links">
                <ButtonLink url={link}>LIVE LINK</ButtonLink>
                <ButtonLink url={codeLink} clean={true}>CODE LINK</ButtonLink>
            </div>
        </div>
    )
}