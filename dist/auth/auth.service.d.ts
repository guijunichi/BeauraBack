import { ClienteService } from 'src/cliente/cliente.service';
import { Prisma } from '@prisma/client';
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private clienteService;
    private readonly jwtService;
    constructor(clienteService: ClienteService, jwtService: JwtService);
    signin(body: Prisma.ClienteCreateInput): Promise<Omit<ClienteEntity, 'senha'> & Partial<{
        token: string;
    }> | any>;
}
