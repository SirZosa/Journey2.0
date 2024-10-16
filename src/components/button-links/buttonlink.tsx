import './buttonlink.css'
type Props = {
    url:string;
    children:string;
    clean?:boolean;
}
export default function ButtonLink({url, children, clean=false}:Props){
    return(
        <a className={`button-link ${clean ? 'clean' : 'not-clean'}`} href={url} target='_blank'>{children}</a>
    )
}