import RespostaModel from "../models/resposta"
import styles from '../src/styles/Enunciado.module.css'

interface RespostaProps{
    valor: RespostaModel
    indice: number
    letra: string
    corLetra: string
    respostaCliente: (index: number) => void
}

export default function Resposta(props: RespostaProps){
    const resposta = props.valor
    return (
        <div className={styles.resposta} onClick={() => props.respostaCliente(props.indice)}>
            <div className={styles.conteudoResposta}>
                <div className={styles.frente}>
                    <div className={styles.letra}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>

                </div>
            </div>
        </div>
    )
}