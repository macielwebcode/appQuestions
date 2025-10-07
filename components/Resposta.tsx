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
                {resposta.revelada ? (

                    <div className={styles.frente}>
                        <div className={styles.letra}>
                            {props.letra}
                        </div>
                        <div className={styles.valor}>
                            {resposta.valor}
                        </div>
                    </div>



                ):(
                    <div className={styles.verso}>
                        {resposta.certa ? (
                            <div className={styles.certa}>
                                <div>A resposta correta é: </div>
                                <div className={styles.texto}>{resposta.valor}</div>
                            </div>
                        ) : (
                            <div className={styles.errada}>
                                <div>A resposta está errada. </div>
                                <div className={styles.texto}>{resposta.valor}</div>
                            </div>
                        )}
                    
                    </div>
                )}  
                
                
            </div>
        </div>
    )
}