import { Injectable } from '@nestjs/common';
import { CreatePreformularioDto } from './dto/create-preformulario.dto';
import { UpdatePreformularioDto } from './dto/update-preformulario.dto';
import { PreformularioEntity } from './entities/preformulario.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PreformularioService {
  constructor(private readonly prisma : PrismaService){}
  create(createPreformularioDto: CreatePreformularioDto) : Promise<PreformularioEntity> {
    return this.prisma.preFormulario.create({data : createPreformularioDto});
  }

  findAll() : Promise<PreformularioEntity[]> {
    return this.prisma.preFormulario.findMany();
  }

  findOne(pre_id: number) : Promise<PreformularioEntity> {
    return this.prisma.preFormulario.findUnique({where:{pre_id}});
  }

  update(pre_id: number, updatePreformularioDto: UpdatePreformularioDto) : Promise<PreformularioEntity> {
    return this.prisma.preFormulario.update({where:{pre_id}, data: updatePreformularioDto});
  }

  remove(pre_id: number) : Promise<PreformularioEntity> {
    return this.prisma.preFormulario.delete({where:{pre_id}});
  }
}
