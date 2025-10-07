import QuestaoModel from "../models/question";
import styles from '../src/styles/Questao.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";


const letras= [
    { valor: 'A', cor: '#cacaca' },
    { valor: 'B', cor: '#F2C866' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#1A16G2' },
]

interface QuestaProps{
    valor: QuestaoModel
    respostaCliente: (indice: number) => void
}

export default function Questao(props: QuestaProps){
    const questao = props.valor


    function renderizarRespostas(){
        const questoes = questao.respostas.map((item, i) => {
            return <Resposta
                key={i}  
                valor={item}
                indice={i}
                letra={letras[i].valor}
                corLetra={letras[i].cor}
                respostaCliente={props.respostaCliente}
            />
        })

        return questoes
    }

    return(
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            {renderizarRespostas()}
        </div>
    )
}