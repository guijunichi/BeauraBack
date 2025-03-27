import { SolicitacaoService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
export declare class SolicitacaoController {
    private readonly solicitacaoService;
    constructor(solicitacaoService: SolicitacaoService);
    create(createSolicitacaoDto: CreateSolicitacaoDto): Promise<import("./entities/solicitacao.entity").SolicitacaoEntity>;
    findAll(): Promise<import("./entities/solicitacao.entity").SolicitacaoEntity[]>;
    findOne(id: string): Promise<import("./entities/solicitacao.entity").SolicitacaoEntity>;
    update(id: string, updateSolicitacaoDto: UpdateSolicitacaoDto): Promise<import("./entities/solicitacao.entity").SolicitacaoEntity>;
    remove(id: string): Promise<import("./entities/solicitacao.entity").SolicitacaoEntity>;
    getSolicitacoes(cadId: number): Promise<{
        solicitacaoId: number;
        status: string;
        data: Date;
        descricao: string;
        cadId: number;
        proId: number;
    }[] | {
        message: string;
    }>;
}
