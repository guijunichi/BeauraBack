import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
export declare class TurmaController {
    private readonly turmaService;
    constructor(turmaService: TurmaService);
    create(createTurmaDto: CreateTurmaDto): Promise<import("./entities/turma.entity").TurmaEntity>;
    findAll(): Promise<import("./entities/turma.entity").TurmaEntity[]>;
    findOne(id: string): Promise<import("./entities/turma.entity").TurmaEntity>;
    update(id: string, updateTurmaDto: UpdateTurmaDto): Promise<import("./entities/turma.entity").TurmaEntity>;
    remove(id: string): Promise<import("./entities/turma.entity").TurmaEntity>;
}
