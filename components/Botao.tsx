import Link from 'next/link'
import styles from '../src/styles/Button.module.css'


interface BtnProps{
    href?: string
    texto?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BtnProps){


    function renderizarBtn(){
        return(
                <button className={styles.btn}
                    onClick={props.onClick}>
                    {props.texto}
                </button>
        )
    }

    return props.href ?(
        
            <Link href={props.href}>
                {renderizarBtn()}
            </Link>
        
    ) : renderizarBtn()
}