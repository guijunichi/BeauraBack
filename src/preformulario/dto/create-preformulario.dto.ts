import { Decimal } from "@prisma/client/runtime/library"
import { IsDateString, IsDecimal, IsNumber, IsString } from "class-validator"

export class CreatePreformularioDto {
    @IsDecimal()
    pre_altura: Decimal
    @IsDecimal()
    pre_peso: Decimal
    @IsDecimal()
    pre_imc: Decimal
    @IsString()
    // Pergunta: Fez Tratamentos Estéticos Anteriores?
    @IsString()
    pre_p1: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p2: string
    // Pergunta: Médico/Especialidade/Data da Última Consulta / Médico:
    @IsString()
    pre_p3: string
    // Pergunta: Especialidade:
    @IsString()
    pre_p4: string
    // Pergunta: Data:
    @IsDateString()
    pre_p5: Date
    // Pergunta: Antecedentes Alérgicos?
    @IsString()
    pre_p6: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p7: string
    // Pergunta: Alterações Hormonais?
    @IsString()
    pre_p8: string
    // Pergunta: Reposição Hormonal?
    @IsString()
    pre_p9: string
    // Pergunta: Hipertiroidismo?
    @IsString()
    pre_p10: string
    // Pergunta: Hipotireoidismo?
    @IsString()
    pre_p12: string
    // Pergunta: Intestino Regular?
    @IsString()
    pre_p13: string
    // Pergunta: Alimentação Balanceada?
    @IsString()
    pre_p14: string
    // Pergunta: Consumo de Líquidos?
    @IsString()
    pre_p15: string
    // Pergunta: Quantidade/Dia:
    @IsString()
    pre_p16: string
    // Pergunta: Ingere Bebida Alcoólica?
    @IsString()
    pre_p17: string
    // Pergunta: Com qual Frequência:
    @IsString()
    pre_p18: string
    // Pergunta: Prática de Atividades Físicas?:
    @IsString()
    pre_p19: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p20: string
    // Pergunta: Com qual Frequência:
    @IsString()
    pre_p21: string
    // Pergunta: Fumante?
    @IsString()
    pre_p22: string
    // Pergunta: Ciclo Menstrual Regular?
    @IsString()
    pre_p23: string
    // Pergunta: DUM:
    @IsDateString()
    pre_p24: Date
    // Pergunta: Faz Uso de Métodos Anticoncepcionais?
    @IsString()
    pre_p25: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p26: string
    // Pergunta: Medicação de Uso Contínuo?
    @IsString()
    pre_p27: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p28: string
    // Pergunta: Gestação?
    @IsString()
    pre_p29: string
    // Pergunta: Quantas?
    @IsString()
    pre_p30: string
    // Pergunta: Tipos de Partos:
    @IsString()
    pre_p31: string
    // Pergunta: Está Amamentando?
    @IsString()
    pre_p32: string
    // Pergunta: Está Gestante?
    @IsString()
    pre_p33: string
    // Pergunta: Alterações de Pressão / Hipotensão?
    @IsString()
    pre_p34: string
    // Pergunta: Alterações Vasculares? / Varizes?
    @IsString()
    pre_p36: string
    // Pergunta: Trombose?
    @IsString()
    pre_p37: string
    // Pergunta: Outras?
    @IsString()
    pre_p38: string
    // Pergunta: Distúrbios Cardíacos?
    @IsString()
    pre_p39: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p40: string
    // Pergunta: Portador de Marca Passo?
    @IsString()
    pre_p41: string
    // Pergunta: Há quanto tempo?
    @IsString()
    pre_p42: string
    // Pergunta: Presença de Prótese Metálica?
    @IsString()
    pre_p43: string
    // Pergunta: Localização:
    @IsString()
    pre_p44: string
    // Pergunta: Aparelho Ortodôntico?
    @IsString()
    pre_p45: string
    // Pergunta: Faz uso de Lentes de Contato?
    @IsString()
    pre_p46: string
    // Pergunta: Epilepsia?
    @IsString()
    pre_p47: string
    // Pergunta: Convulsões?
    @IsString()
    pre_p48: string
    // Pergunta: Diabetes?
    @IsString()
    pre_p49: string
    // Pergunta: Antecedentes Oncológico?
    @IsString()
    pre_p50: string
    // Pergunta: Caso sim, quais?
    @IsString()
    pre_p51: string
    // Pergunta: Fez Cirurgia Recentemente?
    @IsString()
    pre_p52: string
    // Pergunta: Caso sim, qual?
    @IsString()
    pre_p53: string
    // Pergunta: Faz uso de protetor solar diariamente?
    @IsString()
    pre_p54: string
    // Pergunta: Caso sim, reaplica?
    @IsString()
    pre_p55: string
    // Pergunta: Quais produtos você usa para cuidado diário?
    @IsString()
    pre_p56: string
    @IsNumber()
    solId: number
}
