import './glasscard.css'
type Props = {
    children: React.JSX.Element
}

export default function GlassCard({children}:Props){
    return(
        <div className="glass-card">
            {children}
        </div>
    )
}