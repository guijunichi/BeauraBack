import { Injectable, ConflictException  } from '@nestjs/common';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CadastroEntity } from './entities/cadastro.entity';

@Injectable()
export class CadastroService {
  constructor(private readonly prisma :PrismaService){}
  async create(createCadastroDto :CreateCadastroDto) :Promise<CadastroEntity> {
    return this.prisma.cadastro.create({data:createCadastroDto});
  }

  async findAll() :Promise<CadastroEntity[]>{
    return this.prisma.cadastro.findMany();
  }

  async findOne(cad_id: number) :Promise<CadastroEntity> {
    return this.prisma.cadastro.findUnique({where:{cad_id}});
  }

  async update(cad_id: number, updateCadastroDto: UpdateCadastroDto) :Promise<CadastroEntity> {
    return this.prisma.cadastro.update({where:{cad_id}, data: updateCadastroDto});
  }

  async remove(cad_id: number) :Promise<CadastroEntity> {
    return this.prisma.cadastro.delete({where:{cad_id}});
  }

  async getCadastroByUserId(cliId: number):Promise<CadastroEntity> {
    return this.prisma.cadastro.findFirst({where:{ cliId }});
  }
}
