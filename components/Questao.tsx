import QuestaoModel from "../models/question";
import styles from '../src/styles/Questao.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";


const letras= [
    { valor: 'A', cor: '#cacaca' },
    { valor: 'B', cor: '#F2C866' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#1A16G2' },
]

interface QuestaProps{
    valor: QuestaoModel
    tempoParaResposta?: number
    respostaCliente: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaProps){
    const questao = props.valor


    function renderizarRespostas(){
        const questoes = questao.respostas.map((item, i) => {
            return <Resposta
                key={`${questao.id}-${i}`}  
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
            <Temporizador
                key={questao.id} 
                duracao={props.tempoParaResposta ?? 10 } 
                tempoEsgotado={props.tempoEsgotado}
            />
            {renderizarRespostas()}
        </div>
    )
}