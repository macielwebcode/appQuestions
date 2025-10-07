import QuestaoModel from "../../../models/question";
import RespostaModel from "../../../models/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual nome da minha cachorra?', [
        RespostaModel.certa('Babi'),
        RespostaModel.errada('Paçoca'),
        RespostaModel.errada('Pipoca'),
    ]),
    new QuestaoModel(2, 'Qual nome da minha mãe?', [
        RespostaModel.errada('Tereza'),
        RespostaModel.certa('Fernanda'),
        RespostaModel.errada('Babi'),
    ]),
     new QuestaoModel(3, 'Quantas cirurgias eu fiz na coluna?', [
        RespostaModel.errada('1'),
        RespostaModel.certa('2'),
        RespostaModel.errada('3'),
    ]),
    new QuestaoModel(4, 'Qual minha bebida favorita?', [
        RespostaModel.errada('vodka'),
        RespostaModel.certa('cerveja'),
        RespostaModel.errada('whiski'),
    ])
]

export default questoes