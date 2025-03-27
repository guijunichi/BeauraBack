import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EspecialidadeEntity } from './entities/especialidade.entity';
export declare class EspecialidadeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEspecialidadeDto: CreateEspecialidadeDto): Promise<EspecialidadeEntity>;
    findAll(): Promise<EspecialidadeEntity[]>;
    findOne(esp_id: number): Promise<EspecialidadeEntity>;
    update(esp_id: number, updateEspecialidadeDto: UpdateEspecialidadeDto): Promise<EspecialidadeEntity>;
    remove(esp_id: number): Promise<EspecialidadeEntity>;
}
