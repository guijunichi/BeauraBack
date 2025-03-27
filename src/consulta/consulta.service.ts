import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConsultaEntity } from './entities/consulta.entity';

@Injectable()
export class ConsultaService {
  constructor(private readonly prisma :PrismaService){}
  async create(createConsultaDto: CreateConsultaDto) :Promise<ConsultaEntity>{
    return this.prisma.consulta.create({data :createConsultaDto});
  }

  async findAll() :Promise<ConsultaEntity[]>{
    return this.prisma.consulta.findMany();
  }

  async findOne(con_id: number) :Promise<ConsultaEntity>{
    return this.prisma.consulta.findUnique({where:{con_id}});
  }

  async update(con_id: number, updateConsultaDto: UpdateConsultaDto) :Promise<ConsultaEntity>{
    return this.prisma.consulta.update({where:{con_id}, data :updateConsultaDto});
  }

  async remove(con_id: number) :Promise<ConsultaEntity>{
    return this.prisma.consulta.delete({where:{con_id}});
  }

  async getConsultaByCadId(sol_id: number):Promise<ConsultaEntity[]> {
    return this.prisma.consulta.findMany({where:{ sol_id }});
  }

  async getConsultaByTecId(tec_id: number):Promise<ConsultaEntity[]> {
    return this.prisma.consulta.findMany({where:{ tec_id }});
  }
}
