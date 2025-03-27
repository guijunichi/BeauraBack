import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SolicitacaoEntity } from './entities/solicitacao.entity';
export declare class SolicitacaoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSolicitacaoDto: CreateSolicitacaoDto): Promise<SolicitacaoEntity>;
    findAll(): Promise<SolicitacaoEntity[]>;
    findOne(sol_id: number): Promise<SolicitacaoEntity>;
    update(sol_id: number, updateSolicitacaoDto: UpdateSolicitacaoDto): Promise<SolicitacaoEntity>;
    remove(sol_id: number): Promise<SolicitacaoEntity>;
    getSolicitacaoByCadId(cadId: number): Promise<SolicitacaoEntity[]>;
}
