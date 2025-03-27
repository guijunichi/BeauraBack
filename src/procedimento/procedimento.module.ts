import { Module } from '@nestjs/common';
import { ProcedimentoService } from './procedimento.service';
import { ProcedimentoController } from './procedimento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProcedimentoController],
  providers: [ProcedimentoService, PrismaService],
})
export class ProcedimentoModule {}
