import { Injectable } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EspecialidadeEntity} from './entities/especialidade.entity';

@Injectable()
export class EspecialidadeService {
  constructor(private readonly prisma :PrismaService){}
  async create(createEspecialidadeDto: CreateEspecialidadeDto) :Promise<EspecialidadeEntity> {
    return this.prisma.especialidade.create({data :createEspecialidadeDto});
  }

  async findAll() :Promise<EspecialidadeEntity[]>{
    return this.prisma.especialidade.findMany();
  }

  async findOne(esp_id: number) :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.findUnique({where:{esp_id}});
  }
  
  async update(esp_id: number, updateEspecialidadeDto: UpdateEspecialidadeDto) :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.update({where:{esp_id}, data :updateEspecialidadeDto});
  }

  async remove(esp_id: number) :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.delete({where:{esp_id}});
  }
}
