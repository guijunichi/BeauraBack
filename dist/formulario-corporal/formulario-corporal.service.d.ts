import { CreateFormularioCorporalDto } from './dto/create-formulario-corporal.dto';
import { UpdateFormularioCorporalDto } from './dto/update-formulario-corporal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormularioCorporalEntity } from './entities/formulario-corporal.entity';
export declare class FormularioCorporalService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFormularioCorporalDto: CreateFormularioCorporalDto): Promise<FormularioCorporalEntity>;
    findAll(): Promise<FormularioCorporalEntity[]>;
    findOne(cor_id: number): Promise<FormularioCorporalEntity>;
    update(cor_id: number, updateFormularioCorporalDto: UpdateFormularioCorporalDto): Promise<FormularioCorporalEntity>;
    remove(cor_id: number): Promise<FormularioCorporalEntity>;
}
