import { embaralhar } from "../../../../functions/arrays";
import questoes from "../dbQuestoes";
import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
   
    const listaquestoes = questoes.map(item => item.id)
    res.status(200).json(embaralhar(listaquestoes))
    
}

