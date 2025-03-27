import { TecnicosService } from './tecnicos.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
export declare class TecnicosController {
    private readonly tecnicosService;
    constructor(tecnicosService: TecnicosService);
    create(createTecnicoDto: CreateTecnicoDto): Promise<import("./entities/tecnico.entity").TecnicoEntity>;
    findAll(): Promise<import("./entities/tecnico.entity").TecnicoEntity[]>;
    findOne(id: string): Promise<import("./entities/tecnico.entity").TecnicoEntity>;
    update(id: string, updateTecnicoDto: UpdateTecnicoDto): Promise<import("./entities/tecnico.entity").TecnicoEntity>;
    remove(id: string): Promise<import("./entities/tecnico.entity").TecnicoEntity>;
    getTecnico(cliId: number): Promise<{
        message: string;
        cadastro?: undefined;
    } | {
        cadastro: import("./entities/tecnico.entity").TecnicoEntity;
        message?: undefined;
    }>;
}
