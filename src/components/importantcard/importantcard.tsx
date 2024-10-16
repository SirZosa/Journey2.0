import './importantcard.css'
import Badge from '../badge/badge'
import ButtonLink from '../button-links/buttonlink'

type Props = {
    src:string;
    codeUrl?:string;
    liveUrl?:string;
    title:string;
    skills:string[];
    children:string;
}

export default function ImportantCard({src, codeUrl, liveUrl, title, skills, children}:Props){

    const htmlSkills = skills.map(skill => {
        return(
            <Badge attr={skill} key={crypto.randomUUID()}>{skill}</Badge>
        )
    })

    return(
        <div className="important-card">
            <img src={src} alt="project img" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{children}</p>
                <div className="links-container">
                    <ButtonLink url={liveUrl? liveUrl : "/"}>LIVE LINK</ButtonLink>
                    <ButtonLink url={codeUrl ? codeUrl : "/"} clean={true}>CODE LINK</ButtonLink>
                </div>
                <b>Skills used:</b>
                <div className="skills-container">
                    {htmlSkills}
                </div>
            </div>
        </div>
    )
}