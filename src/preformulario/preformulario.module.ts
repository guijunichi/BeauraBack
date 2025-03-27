import { Module } from '@nestjs/common';
import { PreformularioController } from './preformulario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PreformularioService } from './preformulario.service';


@Module({
  controllers: [PreformularioController],
  providers: [PreformularioService, PrismaService],
})
export class PreformularioModule {}
