import { ConsultaService } from './consulta.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
export declare class ConsultaController {
    private readonly consultaService;
    constructor(consultaService: ConsultaService);
    create(createConsultaDto: CreateConsultaDto): Promise<import("./entities/consulta.entity").ConsultaEntity>;
    findAll(): Promise<import("./entities/consulta.entity").ConsultaEntity[]>;
    findOne(id: string): Promise<import("./entities/consulta.entity").ConsultaEntity>;
    update(id: string, updateConsultaDto: UpdateConsultaDto): Promise<import("./entities/consulta.entity").ConsultaEntity>;
    remove(id: string): Promise<import("./entities/consulta.entity").ConsultaEntity>;
    getConsulta(sol_id: number): Promise<{
        con_id: number;
        con_data: Date;
        con_descricao: string;
        hora_inicio: string;
        hora_termino: string;
        tec_id: number;
        sol_id: number;
    }[] | {
        message: string;
    }>;
    getConsultaTec(tec_id: number): Promise<{
        con_id: number;
        con_data: Date;
        con_descricao: string;
        hora_inicio: string;
        hora_termino: string;
        tec_id: number;
        sol_id: number;
    }[] | {
        message: string;
    }>;
}
