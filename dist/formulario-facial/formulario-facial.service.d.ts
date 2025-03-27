import { CreateFormularioFacialDto } from './dto/create-formulario-facial.dto';
import { UpdateFormularioFacialDto } from './dto/update-formulario-facial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormularioFacialEntity } from './entities/formulario-facial.entity';
export declare class FormularioFacialService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFormularioFacialDto: CreateFormularioFacialDto): Promise<FormularioFacialEntity>;
    findAll(): Promise<FormularioFacialEntity[]>;
    findOne(fac_id: number): Promise<FormularioFacialEntity>;
    update(fac_id: number, updateFormularioFacialDto: UpdateFormularioFacialDto): Promise<FormularioFacialEntity>;
    remove(fac_id: number): Promise<FormularioFacialEntity>;
}
