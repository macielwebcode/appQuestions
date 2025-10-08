import QuestaoModel from "../models/question"
import styles from '../src/styles/Questionario.module.css'
import Botao from "./Botao"
import Questao from "./Questao"

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    nextQuestion: () => void
}

export default function Questionario(props: QuestionarioProps){

    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return(
        <div className={styles.questionario}>
            {props.questao ? 
                <Questao 
                    valor={props.questao}
                    tempoParaResposta={6}
                    respostaCliente={respostaFornecida}
                    tempoEsgotado={props.nextQuestion}
                />
                : false
        
            } 

            
            
            <Botao onClick={props.nextQuestion}
                texto={props.ultima ? 'Finalizar' : 'Próxima'}
            />

        </div>
    )
}