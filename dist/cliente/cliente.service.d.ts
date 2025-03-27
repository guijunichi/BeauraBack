import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteEntity } from './entities/cliente.entity';
export declare class ClienteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createClienteDto: CreateClienteDto): Promise<ClienteEntity>;
    findAll(): Promise<ClienteEntity[]>;
    findUnique(cli_email: string): Promise<ClienteEntity>;
    findOne(cli_id: number): Promise<ClienteEntity>;
    update(cli_id: number, updateClienteDto: UpdateClienteDto): Promise<ClienteEntity>;
    remove(cli_id: number): Promise<ClienteEntity>;
}
