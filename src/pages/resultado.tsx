import { useRouter } from "next/router"
import Estatistica from "../../components/Estatistica"
import styles from '../styles/Resultado.module.css'
import Botao from "../../components/Botao"

export default function Resultado(){
    const router =  useRouter()
    const resultTotal = router.query.total
    const resultCertas = router.query.certas
    const total = Number(resultTotal)
    const certas = Number(resultCertas)
    const percentual = Math.round((certas / total) * 100)
    return(
        <>
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{display: "flex"}}>
                <Estatistica texto="Perguntas" valor={total}/>
                <Estatistica texto="Certas" valor={certas}/>
                <Estatistica texto="Percentual" valor={percentual}/>
            </div>
            <Botao href="/" texto="Tentar Novamente"/>
        </div>
            

        </>
    )
}