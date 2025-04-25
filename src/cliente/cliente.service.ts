import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteEntity } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  // Buscar cliente por email
  async findByEmail(email: string): Promise<ClienteEntity | null> {
    return this.prisma.cliente.findUnique({
      where: { email: email }
    });
  }

  async create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    return this.prisma.cliente.create({
      data: createClienteDto
    });
  }

  async findAll(): Promise<ClienteEntity[]> {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: number): Promise<ClienteEntity> {
    return this.prisma.cliente.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<ClienteEntity> {
    return this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto
    });
  }

  async remove(id: number): Promise<ClienteEntity> {
    return this.prisma.cliente.delete({
      where: { id }
    });
  }
}
