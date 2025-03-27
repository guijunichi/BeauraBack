import {Consulta} from "@prisma/client"

export class ConsultaEntity implements Consulta{
    con_id: number;
    con_data: Date;
    con_descricao: string;
    hora_inicio: string;
    hora_termino: string;
    tec_id: number;
    sol_id: number
}
