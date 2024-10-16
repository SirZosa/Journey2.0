import './profilepic.css'
type Props={
    src: string;
    size?: string;
}
export default function ProfilePic({src, size="md"}:Props){
    return(
        <img src={src} alt="Profile pic" className={`profile-pic ${size}`} />
    )
}