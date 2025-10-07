import questoes from "../dbQuestoes";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const idSelecionado = req.query.id
    const idNumber = Number(idSelecionado)
    const idquestao = questoes.filter(questao => questao.id === idNumber)


    if(idquestao.length === 1){
       const questaoSelected = idquestao[0].embaralharRespostas()
       res.status(200).json(questaoSelected.convertToObject())
    }else{
        res.status(204).send({message: 'sem conteúdo'})
    }

    
}

