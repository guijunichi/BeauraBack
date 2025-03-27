import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteEntity } from './entities/cliente.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma : PrismaService){}
  async create(createClienteDto: CreateClienteDto) : Promise<ClienteEntity> {
    const hash = await bcrypt.hash(createClienteDto.cli_senha, 12);
    createClienteDto.cli_senha = hash;
    return this.prisma.cliente.create({data:createClienteDto});
  }
  // async findUnique(cli_email: string): Promise<ClienteEntity> {
  //   if (!cli_email) {
  //     throw new Error('O campo cli_email não pode estar vazio ou indefinido');
  //   }
  
  //   return this.prisma.cliente.findUnique({
  //     where: {
  //       cli_email: cli_email,
  //     },
  //   });
  // }
  
  async findAll() : Promise<ClienteEntity[]> {
  return this.prisma.cliente.findMany();
 }
  async findUnique(cli_email :string) :Promise<ClienteEntity>{
    return this.prisma.cliente.findUnique({where:{cli_email}});
  }
  async findOne(cli_id: number) : Promise<ClienteEntity> {
    return this.prisma.cliente.findUnique({where:{cli_id}});
  }

  async update(cli_id: number, updateClienteDto: UpdateClienteDto) : Promise<ClienteEntity> {
    return this.prisma.cliente.update({where:{cli_id}, data: updateClienteDto});
  }

  async remove(cli_id: number) : Promise<ClienteEntity> {
    return this.prisma.cliente.delete({where:{cli_id}});
  }
}
