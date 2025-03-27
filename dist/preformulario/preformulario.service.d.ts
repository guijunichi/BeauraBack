import { CreatePreformularioDto } from './dto/create-preformulario.dto';
import { UpdatePreformularioDto } from './dto/update-preformulario.dto';
import { PreformularioEntity } from './entities/preformulario.entity';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PreformularioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPreformularioDto: CreatePreformularioDto): Promise<PreformularioEntity>;
    findAll(): Promise<PreformularioEntity[]>;
    findOne(pre_id: number): Promise<PreformularioEntity>;
    update(pre_id: number, updatePreformularioDto: UpdatePreformularioDto): Promise<PreformularioEntity>;
    remove(pre_id: number): Promise<PreformularioEntity>;
}
