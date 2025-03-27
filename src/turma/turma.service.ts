import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TurmaEntity } from './entities/turma.entity';

@Injectable()
export class TurmaService {
  constructor(private readonly prisma :PrismaService){}
  async create(createTurmaDto: CreateTurmaDto) :Promise<TurmaEntity>{
    return this.prisma.turma.create({data :createTurmaDto});
  }

  async findAll() :Promise<TurmaEntity[]>{
    return this.prisma.turma.findMany();
  }

  async findOne(tur_id: number) :Promise<TurmaEntity>{
    return this.prisma.turma.findUnique({where:{tur_id}});
  }

  async update(tur_id: number, updateTurmaDto: UpdateTurmaDto) :Promise<TurmaEntity>{
    return this.prisma.turma.update({where:{tur_id}, data :updateTurmaDto});
  }

  async remove(tur_id: number) :Promise<TurmaEntity>{
    return this.prisma.turma.delete({where:{tur_id}});
  }
}
