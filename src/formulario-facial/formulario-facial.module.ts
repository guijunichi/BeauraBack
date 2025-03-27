import { Module } from '@nestjs/common';
import { FormularioFacialService } from './formulario-facial.service';
import { FormularioFacialController } from './formulario-facial.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FormularioFacialController],
  providers: [FormularioFacialService,PrismaService],
})
export class FormularioFacialModule {}
