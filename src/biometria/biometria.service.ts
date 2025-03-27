import { Injectable } from '@nestjs/common';
import { CreateBiometriaDto } from './dto/create-biometria.dto';
import { UpdateBiometriaDto } from './dto/update-biometria.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BiometriaEntity } from './entities/biometria.entity';

@Injectable()
export class BiometriaService {
  constructor(private readonly prisma :PrismaService){}
  async create(createBiometriaDto: CreateBiometriaDto) :Promise<BiometriaEntity>{
    return this.prisma.biometria.create({data :createBiometriaDto});
  }

  async findAll() :Promise<BiometriaEntity[]>{
    return this.prisma.biometria.findMany();
  }

  async findOne(bio_id: number) :Promise<BiometriaEntity>{
    return this.prisma.biometria.findUnique({where:{bio_id}});
  }

  async update(bio_id: number, updateBiometriaDto: UpdateBiometriaDto) :Promise<BiometriaEntity>{
    return this.prisma.biometria.update({where:{bio_id}, data :updateBiometriaDto});
  }

  async remove(bio_id: number) :Promise<BiometriaEntity>{
    return this.prisma.biometria.delete({where: {bio_id}});
  }
}
