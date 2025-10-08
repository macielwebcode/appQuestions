

import QuestaoModel from "../../models/question";
import Questionario from "../../components/Questionario";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";



const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  

  const router = useRouter()

  const [idDasQuestoes, setIDSQ] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostaOk, setRespostaOK] = useState<number>(0)

  async function carregarIDsQuestoes(){
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsquestoes = await resp.json()
    setIDSQ(idsquestoes)
  }

  useEffect(() => {
    carregarIDsQuestoes()
  }, [])


  async function carregarTheQuestao(id: number){
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const infosQuestao = await resp.json()
    const newQuestion = QuestaoModel.fromObjeto(infosQuestao)
    setQuestao(newQuestion)
  }

  useEffect(() => {
    idDasQuestoes.length > 0 && carregarTheQuestao(idDasQuestoes[0])
    
  }, [idDasQuestoes])

  

  function questaoRespondida(questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
    const certa = questaoRespondida.acertou
    setRespostaOK(respostaOk + (certa ? 1 : 0))
  }

  function idProximaPergunta(){
    
    const proximoIndice = idDasQuestoes.indexOf(questao.id) + 1
    return idDasQuestoes[proximoIndice]
    
    
  }

  function nextStep(){
    const proximoId = idProximaPergunta()
    proximoId ? nextQuestion(proximoId) : finalizar()
  }

  function nextQuestion(proximoId: number){
    carregarTheQuestao(proximoId)
  }

  function finalizar(){
    router.push({
      pathname: "/resultado",
      query: {
        total: idDasQuestoes.length,
        certas: respostaOk
      }
    })
  }

  return (
    <>
      {questao ?
        <Questionario 
          questao={questao}
          ultima={idProximaPergunta() === undefined}
          questaoRespondida={questaoRespondida}
          nextQuestion={nextStep}
        /> 
        : false
      }

    </>
  );
}
