import { Injectable } from '@nestjs/common';
import { CreateFormularioFacialDto } from './dto/create-formulario-facial.dto';
import { UpdateFormularioFacialDto } from './dto/update-formulario-facial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormularioFacialEntity } from './entities/formulario-facial.entity';

@Injectable()
export class FormularioFacialService {
  constructor(private readonly prisma :PrismaService){}
  async create(createFormularioFacialDto: CreateFormularioFacialDto) :Promise<FormularioFacialEntity>{
    return this.prisma.formularioFacial.create({data :createFormularioFacialDto});
  }

  async findAll() :Promise<FormularioFacialEntity[]>{
    return this.prisma.formularioFacial.findMany();
  }

  async findOne(fac_id: number) :Promise<FormularioFacialEntity>{
    return this.prisma.formularioFacial.findUnique({where:{fac_id}});
  }

  async update(fac_id: number, updateFormularioFacialDto: UpdateFormularioFacialDto) :Promise<FormularioFacialEntity>{
    return this.prisma.formularioFacial.update({where:{fac_id}, data :updateFormularioFacialDto});
  }

  async remove(fac_id: number) :Promise<FormularioFacialEntity>{
    return this.prisma.formularioFacial.delete({where:{fac_id}});
  }
}
