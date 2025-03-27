import { FormularioCorporalService } from './formulario-corporal.service';
import { CreateFormularioCorporalDto } from './dto/create-formulario-corporal.dto';
import { UpdateFormularioCorporalDto } from './dto/update-formulario-corporal.dto';
export declare class FormularioCorporalController {
    private readonly formularioCorporalService;
    constructor(formularioCorporalService: FormularioCorporalService);
    create(createFormularioCorporalDto: CreateFormularioCorporalDto): Promise<import("./entities/formulario-corporal.entity").FormularioCorporalEntity>;
    findAll(): Promise<import("./entities/formulario-corporal.entity").FormularioCorporalEntity[]>;
    findOne(id: string): Promise<import("./entities/formulario-corporal.entity").FormularioCorporalEntity>;
    update(id: string, updateFormularioCorporalDto: UpdateFormularioCorporalDto): Promise<import("./entities/formulario-corporal.entity").FormularioCorporalEntity>;
    remove(id: string): Promise<import("./entities/formulario-corporal.entity").FormularioCorporalEntity>;
}
