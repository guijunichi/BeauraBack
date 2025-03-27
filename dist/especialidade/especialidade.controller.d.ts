import { EspecialidadeService } from './especialidade.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
export declare class EspecialidadeController {
    private readonly especialidadeService;
    constructor(especialidadeService: EspecialidadeService);
    create(createEspecialidadeDto: CreateEspecialidadeDto): Promise<import("./entities/especialidade.entity").EspecialidadeEntity>;
    findAll(): Promise<import("./entities/especialidade.entity").EspecialidadeEntity[]>;
    findOne(id: string): Promise<import("./entities/especialidade.entity").EspecialidadeEntity>;
    update(id: string, updateEspecialidadeDto: UpdateEspecialidadeDto): Promise<import("./entities/especialidade.entity").EspecialidadeEntity>;
    remove(id: string): Promise<import("./entities/especialidade.entity").EspecialidadeEntity>;
}
