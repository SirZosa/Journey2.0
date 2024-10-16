import './glowingheader.css'

type Props = {
    children: string;
}

export default function GlowingHeader({children}: Props){
    return (
        <h2 className='glowing-header'>{children}</h2>
    )
}