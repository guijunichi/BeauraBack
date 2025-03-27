import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConsultaEntity } from './entities/consulta.entity';
export declare class ConsultaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createConsultaDto: CreateConsultaDto): Promise<ConsultaEntity>;
    findAll(): Promise<ConsultaEntity[]>;
    findOne(con_id: number): Promise<ConsultaEntity>;
    update(con_id: number, updateConsultaDto: UpdateConsultaDto): Promise<ConsultaEntity>;
    remove(con_id: number): Promise<ConsultaEntity>;
    getConsultaByCadId(sol_id: number): Promise<ConsultaEntity[]>;
    getConsultaByTecId(tec_id: number): Promise<ConsultaEntity[]>;
}
