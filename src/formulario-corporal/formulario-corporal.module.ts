import { Module } from '@nestjs/common';
import { FormularioCorporalService } from './formulario-corporal.service';
import { FormularioCorporalController } from './formulario-corporal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FormularioCorporalController],
  providers: [FormularioCorporalService, PrismaService],
})
export class FormularioCorporalModule {}
