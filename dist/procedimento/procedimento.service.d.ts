import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcedimentoEntity } from './entities/procedimento.entity';
export declare class ProcedimentoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProcedimentoDto: CreateProcedimentoDto): Promise<ProcedimentoEntity>;
    findAll(): Promise<ProcedimentoEntity[]>;
    findOne(pro_id: number): Promise<ProcedimentoEntity>;
    update(pro_id: number, updateProcedimentoDto: UpdateProcedimentoDto): Promise<ProcedimentoEntity>;
    remove(pro_id: number): Promise<ProcedimentoEntity>;
}
