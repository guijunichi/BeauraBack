import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<import("./entities/cliente.entity").ClienteEntity>;
    findAll(): Promise<import("./entities/cliente.entity").ClienteEntity[]>;
    findOne(id: string): Promise<import("./entities/cliente.entity").ClienteEntity>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<import("./entities/cliente.entity").ClienteEntity>;
    remove(id: string): Promise<import("./entities/cliente.entity").ClienteEntity>;
}
