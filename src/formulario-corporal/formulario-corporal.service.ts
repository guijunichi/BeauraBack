import { Injectable } from '@nestjs/common';
import { CreateFormularioCorporalDto } from './dto/create-formulario-corporal.dto';
import { UpdateFormularioCorporalDto } from './dto/update-formulario-corporal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormularioCorporalEntity } from './entities/formulario-corporal.entity';


@Injectable()
export class FormularioCorporalService {
  constructor(private readonly prisma :PrismaService){}
  async create(createFormularioCorporalDto: CreateFormularioCorporalDto) :Promise<FormularioCorporalEntity>{
    return this.prisma.formularioCorporal.create({data :createFormularioCorporalDto});
  }

  async findAll() :Promise<FormularioCorporalEntity[]>{
    return this.prisma.formularioCorporal.findMany();
  }

  async findOne(cor_id: number) :Promise<FormularioCorporalEntity>{
    return this.prisma.formularioCorporal.findUnique({where:{cor_id}});
  }

  async update(cor_id: number, updateFormularioCorporalDto: UpdateFormularioCorporalDto) :Promise<FormularioCorporalEntity>{
    return this.prisma.formularioCorporal.update({where:{cor_id}, data :updateFormularioCorporalDto});;
  }

  async remove(cor_id: number) :Promise<FormularioCorporalEntity>{
    return this.prisma.formularioCorporal.delete({where: {cor_id}});
  }
}
