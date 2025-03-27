import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ClienteService } from 'src/cliente/cliente.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private clienteService: ClienteService, private readonly jwtService :JwtService) {}

  async signin(body: Prisma.ClienteCreateInput) :Promise<Omit<ClienteEntity, 'senha'>& Partial <{token :string}> | any>{
        const cliente = await this.clienteService.findUnique(body.cli_email);
        
        if (!cliente) throw new NotFoundException('Usuário ou senha incorretos.');
        const autenticado = await bcrypt.compare(body.cli_senha, cliente.cli_senha);
        if (!autenticado) throw new UnauthorizedException('Credencial inválida.');
        
        //Geração de token com JWT
        const token = await this.jwtService.signAsync({sub:cliente.cli_id});
        

        const { cli_senha, ...result } = cliente;
        return {result, token};
    }

}