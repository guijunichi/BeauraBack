import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SolicitacaoEntity } from './entities/solicitacao.entity';

@Injectable()
export class SolicitacaoService {
  constructor(private readonly prisma :PrismaService){}
  async create(createSolicitacaoDto: CreateSolicitacaoDto) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.create({data :createSolicitacaoDto});
  }

  async findAll() :Promise<SolicitacaoEntity[]>{
    return this.prisma.solicitacao.findMany();
  }

  async findOne(sol_id: number) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.findUnique({where:{sol_id}});
  }

  async update(sol_id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.update({where:{sol_id}, data :updateSolicitacaoDto});
  }

  async remove(sol_id: number) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.delete({where:{sol_id}});
  }

  async getSolicitacaoByCadId(cadId: number):Promise<SolicitacaoEntity[]> {
    return this.prisma.solicitacao.findMany({where:{ cadId }});
  }
}
