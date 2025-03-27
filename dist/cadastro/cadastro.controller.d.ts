import { CadastroService } from './cadastro.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';
export declare class CadastroController {
    private readonly cadastroService;
    constructor(cadastroService: CadastroService);
    create(createCadastroDto: CreateCadastroDto): Promise<import("./entities/cadastro.entity").CadastroEntity>;
    findAll(): Promise<import("./entities/cadastro.entity").CadastroEntity[]>;
    findOne(id: string): Promise<import("./entities/cadastro.entity").CadastroEntity>;
    update(id: string, updateCadastroDto: UpdateCadastroDto): Promise<import("./entities/cadastro.entity").CadastroEntity>;
    remove(id: string): Promise<import("./entities/cadastro.entity").CadastroEntity>;
    getCadastro(cliId: number): Promise<{
        message: string;
        cadastro?: undefined;
    } | {
        cadastro: import("./entities/cadastro.entity").CadastroEntity;
        message?: undefined;
    }>;
}
