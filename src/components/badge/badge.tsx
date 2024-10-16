import './badge.css'
type Props = {
    attr?: string;
    children: string;
}


export default function Badge({attr="default", children}:Props){
    return(
        <div className={`badge ${attr}`}>
            <p className={`badge-skill ${attr}`}>{children}</p>
        </div>
    )
}