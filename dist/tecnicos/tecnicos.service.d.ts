import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TecnicoEntity } from './entities/tecnico.entity';
export declare class TecnicosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTecnicoDto: CreateTecnicoDto): Promise<TecnicoEntity>;
    findAll(): Promise<TecnicoEntity[]>;
    findOne(tec_id: number): Promise<TecnicoEntity>;
    update(tec_id: number, updateTecnicoDto: UpdateTecnicoDto): Promise<TecnicoEntity>;
    remove(tec_id: number): Promise<TecnicoEntity>;
    getTecnicoByUserId(cliId: number): Promise<TecnicoEntity>;
}
