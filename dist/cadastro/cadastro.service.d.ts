import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CadastroEntity } from './entities/cadastro.entity';
export declare class CadastroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCadastroDto: CreateCadastroDto): Promise<CadastroEntity>;
    findAll(): Promise<CadastroEntity[]>;
    findOne(cad_id: number): Promise<CadastroEntity>;
    update(cad_id: number, updateCadastroDto: UpdateCadastroDto): Promise<CadastroEntity>;
    remove(cad_id: number): Promise<CadastroEntity>;
    getCadastroByUserId(cliId: number): Promise<CadastroEntity>;
}
