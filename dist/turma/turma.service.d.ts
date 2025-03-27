import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TurmaEntity } from './entities/turma.entity';
export declare class TurmaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTurmaDto: CreateTurmaDto): Promise<TurmaEntity>;
    findAll(): Promise<TurmaEntity[]>;
    findOne(tur_id: number): Promise<TurmaEntity>;
    update(tur_id: number, updateTurmaDto: UpdateTurmaDto): Promise<TurmaEntity>;
    remove(tur_id: number): Promise<TurmaEntity>;
}
