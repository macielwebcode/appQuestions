
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Questao from "../../components/Questao";
import QuestaoModel from "../../models/question";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  

  const [questao, setQuestao] = useState()

  function respostaCliente(indice: number){
    setQuestao(questao.responderCom(indice))
  }

  return (
    <>
      <div style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Questao valor={questao} respostaCliente={respostaCliente}/>
      </div>
  
    </>
  );
}
