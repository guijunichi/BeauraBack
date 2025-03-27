import { PreformularioService } from './preformulario.service';
import { CreatePreformularioDto } from './dto/create-preformulario.dto';
import { UpdatePreformularioDto } from './dto/update-preformulario.dto';
export declare class PreformularioController {
    private readonly preformularioService;
    constructor(preformularioService: PreformularioService);
    create(createPreformularioDto: CreatePreformularioDto): Promise<import("./entities/preformulario.entity").PreformularioEntity>;
    findAll(): Promise<import("./entities/preformulario.entity").PreformularioEntity[]>;
    findOne(id: string): Promise<import("./entities/preformulario.entity").PreformularioEntity>;
    update(id: string, updatePreformularioDto: UpdatePreformularioDto): Promise<import("./entities/preformulario.entity").PreformularioEntity>;
    remove(id: string): Promise<import("./entities/preformulario.entity").PreformularioEntity>;
}
