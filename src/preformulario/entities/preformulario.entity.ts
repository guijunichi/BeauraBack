import { PreFormulario } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class PreformularioEntity implements PreFormulario {
    pre_id: number;
    pre_altura: Decimal;
    pre_peso: Decimal;
    pre_imc: Decimal;
    // Pergunta: Fez Tratamentos Estéticos Anteriores?
    pre_p1: string;
    // Pergunta: Caso sim, quais?
    pre_p2: string;
    // Pergunta: Médico/Especialidade/Data da Última Consulta / Médico:
    pre_p3: string;
    // Pergunta: Especialidade:
    pre_p4: string;
    // Pergunta: Data:
    pre_p5: Date;
    // Pergunta: Antecedentes Alérgicos?
    pre_p6: string;
    // Pergunta: Caso sim, quais?
    pre_p7: string;
    // Pergunta: Alterações Hormonais?
    pre_p8: string;
    // Pergunta: Reposição Hormonal?
    pre_p9: string;
    // Pergunta: Hipertiroidismo?
    pre_p10: string;
    // Pergunta: Hipotireoidismo?
    pre_p12: string;
    // Pergunta: Intestino Regular?
    pre_p13: string;
    // Pergunta: Alimentação Balanceada?
    pre_p14: string;
    // Pergunta: Consumo de Líquidos?
    pre_p15: string;
    // Pergunta: Quantidade/Dia:
    pre_p16: string;
    // Pergunta: Ingere Bebida Alcoólica?
    pre_p17: string;
    // Pergunta: Com qual Frequência:
    pre_p18: string;
    // Pergunta: Prática de Atividades Físicas?:
    pre_p19: string;
    // Pergunta: Caso sim, quais?
    pre_p20: string;
    // Pergunta: Com qual Frequência:
    pre_p21: string;
    // Pergunta: Fumante?
    pre_p22: string;
    // Pergunta: Ciclo Menstrual Regular?
    pre_p23: string;
    // Pergunta: DUM:
    pre_p24: Date;
    // Pergunta: Faz Uso de Métodos Anticoncepcionais?
    pre_p25: string;
    // Pergunta: Caso sim, quais?
    pre_p26: string;
    // Pergunta: Medicação de Uso Contínuo?
    pre_p27: string;
    // Pergunta: Caso sim, quais?
    pre_p28: string;
    // Pergunta: Gestação?
    pre_p29: string;
    // Pergunta: Quantas?
    pre_p30: string;
    // Pergunta: Tipos de Partos:
    pre_p31: string;
    // Pergunta: Está Amamentando?
    pre_p32: string;
    // Pergunta: Está Gestante?
    pre_p33: string;
    // Pergunta: Alterações de Pressão / Hipotensão?
    pre_p34: string;
    // Pergunta: Alterações Vasculares? / Varizes?
    pre_p36: string;
    // Pergunta: Trombose?
    pre_p37: string;
    // Pergunta: Outras?
    pre_p38: string;
    // Pergunta: Distúrbios Cardíacos?
    pre_p39: string;
    // Pergunta: Caso sim, quais?
    pre_p40: string;
    // Pergunta: Portador de Marca Passo?
    pre_p41: string;
    // Pergunta: Há quanto tempo?
    pre_p42: string;
    // Pergunta: Presença de Prótese Metálica?
    pre_p43: string;
    // Pergunta: Localização:
    pre_p44: string;
    // Pergunta: Aparelho Ortodôntico?
    pre_p45: string;
    // Pergunta: Faz uso de Lentes de Contato?
    pre_p46: string;
    // Pergunta: Epilepsia?
    pre_p47: string;
    // Pergunta: Convulsões?
    pre_p48: string;
    // Pergunta: Diabetes?
    pre_p49: string;
    // Pergunta: Antecedentes Oncológico?
    pre_p50: string;
    // Pergunta: Caso sim, quais?
    pre_p51: string;
    // Pergunta: Fez Cirurgia Recentemente?
    pre_p52: string;
    // Pergunta: Caso sim, qual?
    pre_p53: string;
    // Pergunta: Faz uso de protetor solar diariamente?
    pre_p54: string;
    // Pergunta: Caso sim, reaplica?
    pre_p55: string;
    // Pergunta: Quais produtos você usa para cuidado diário?
    pre_p56: string;
    
    solId: number;
}
