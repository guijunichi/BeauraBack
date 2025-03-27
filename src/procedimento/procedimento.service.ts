import { Injectable } from '@nestjs/common';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcedimentoEntity } from './entities/procedimento.entity';

@Injectable()
export class ProcedimentoService {
  constructor(private readonly prisma :PrismaService){}
  async create(createProcedimentoDto: CreateProcedimentoDto) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.create({data :createProcedimentoDto});
  }

  async findAll() :Promise<ProcedimentoEntity[]>{
    return this.prisma.procedimento.findMany();
  }

  async findOne(pro_id: number) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.findUnique({where:{pro_id}});
  }

  async update(pro_id: number, updateProcedimentoDto: UpdateProcedimentoDto) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.update({where:{pro_id}, data :updateProcedimentoDto})
  }

  async remove(pro_id: number) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.delete({where:{pro_id}});
  }
}
