import styles from '../src/styles/Esatistica.module.css'

interface EstatiPrps{
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}


export default function Estatistica(props: EstatiPrps){
    return(
        <>
            <div className={styles.estatistica}>
                <div className={styles.valor} style={{
                    backgroundColor: props.corFundo ?? '#FDD60F',
                    color: props.corFonte ?? '#333'
                }}>
                    {props.valor}
                </div>
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </>
    )
}