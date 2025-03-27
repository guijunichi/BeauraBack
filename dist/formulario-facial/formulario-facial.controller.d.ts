import { FormularioFacialService } from './formulario-facial.service';
import { CreateFormularioFacialDto } from './dto/create-formulario-facial.dto';
import { UpdateFormularioFacialDto } from './dto/update-formulario-facial.dto';
export declare class FormularioFacialController {
    private readonly formularioFacialService;
    constructor(formularioFacialService: FormularioFacialService);
    create(createFormularioFacialDto: CreateFormularioFacialDto): Promise<import("./entities/formulario-facial.entity").FormularioFacialEntity>;
    findAll(): Promise<import("./entities/formulario-facial.entity").FormularioFacialEntity[]>;
    findOne(id: string): Promise<import("./entities/formulario-facial.entity").FormularioFacialEntity>;
    update(id: string, updateFormularioFacialDto: UpdateFormularioFacialDto): Promise<import("./entities/formulario-facial.entity").FormularioFacialEntity>;
    remove(id: string): Promise<import("./entities/formulario-facial.entity").FormularioFacialEntity>;
}
