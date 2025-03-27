import { ProcedimentoService } from './procedimento.service';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
export declare class ProcedimentoController {
    private readonly procedimentoService;
    constructor(procedimentoService: ProcedimentoService);
    create(createProcedimentoDto: CreateProcedimentoDto): Promise<import("./entities/procedimento.entity").ProcedimentoEntity>;
    findAll(): Promise<import("./entities/procedimento.entity").ProcedimentoEntity[]>;
    findOne(id: string): Promise<import("./entities/procedimento.entity").ProcedimentoEntity>;
    update(id: string, updateProcedimentoDto: UpdateProcedimentoDto): Promise<import("./entities/procedimento.entity").ProcedimentoEntity>;
    remove(id: string): Promise<import("./entities/procedimento.entity").ProcedimentoEntity>;
}
